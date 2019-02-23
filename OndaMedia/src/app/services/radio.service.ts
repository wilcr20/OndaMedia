import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { ToastController } from '@ionic/angular';
import { MusicControls } from '@ionic-native/music-controls/ngx';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  public  radio: MediaObject;
  public  audioUrl: string  ='http://streaming1.ondamusicalradio.com:8100/onradio.mp3';
  public  playpauseBoolean  : boolean = false;

  public radioStation = {
    image: 'https://www.ondamedia.es/wp-content/uploads/2019/01/alberto-herreros2.png',
    track: 'La lista',
    album: 'En directo',
    artist: 'de 17 h a 20 h',
    ticker: 'Onda Media'

  }
 
  constructor(
    public media: Media,
    public toastController: ToastController, 
    public musicControls: MusicControls) { 

    this.inicializeAudio();
    
    this.createNotificationMusic();
    this.musicControls.listen(); 
    this.musicControls.subscribe().subscribe( action => {
      this.eventos(action);
    });
  }

  public inicializeAudio(){

    if(this.playpauseBoolean == false){

      try {

        this.radio = this.media.create(this.audioUrl);
        
      } catch (error) { this.presentToast("error de inicialización"); }
      
    }

  }

  public play(){

    try {

        this.radio.play();
        this.playpauseBoolean = true;
      
    } catch (error) { this.presentToast(error); }

  }

  async presentToast(message: string) {

    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  public playpause(){

    if ( this.playpauseBoolean == true) {

      try {

        this.radio.pause();
        this.playpauseBoolean = false;

      } catch (error) { this.presentToast("pause error"); }

     
    } else {

      try {

        this.radio.play();
        this.playpauseBoolean = true;
        
      } catch (error) { this.presentToast("play error"); }
      
    }
  }


  /*********** music controls ************/

  public createNotificationMusic(){

      this.musicControls.create({

        track:  this.radioStation.track,
        artist: this.radioStation.artist,
        cover:  this.radioStation.image,
        album: this.radioStation.album,
        ticker: 'Ahora estas escuchando la' + this.radioStation.ticker,

        isPlaying: true,
        dismissable: true,
        hasPrev: true,
        hasNext: true,
        hasSkipForward: false,
        hasSkipBackward: false,
        hasClose: false,
        hasScrubbing: true,

        skipForwardInterval: 0,
        skipBackwardInterval: 0,
        duration: 0,
        elapsed: 0,

        playIcon: 'media_play',
        pauseIcon: 'media_pause',
        prevIcon: 'media_prev',
        nextIcon: 'media_next',
        closeIcon: 'media_close',
        notificationIcon: 'notification'
      });
  }

  public eventos(action) {

    const message = JSON.parse(action).message;

    switch (message) {
      case 'music-controls-pause':
        this.playpause();
        this.musicControls.updateIsPlaying(false);
        break;
      case 'music-controls-play':
          this.playpause();  
          this.musicControls.updateIsPlaying(true);
        break;
      default:
        break;
    }
  }
  
  
}
