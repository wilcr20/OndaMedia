import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { ToastController } from '@ionic/angular';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  public  radio: MediaObject;
  public  audioUrl: string  ='http://streaming1.ondamusicalradio.com:8100/onradio.mp3';
  public  playpauseBoolean  : boolean = false;

  constructor(
    public media: Media,
    public toastController: ToastController, 
    public backgroundMode: BackgroundMode) { 

    this.inicializeAudio();
  }

  public inicializeAudio(){

    if(this.playpauseBoolean == false){

      try {
        
        this.backgroundMode.setDefaults({title: "Onda Radio",ticker: "",text: "En directo"});
        this.backgroundMode.enable();
        
        this.radio = this.media.create(this.audioUrl);
        
      } catch (error) { this.presentToast("error de inicialización"); }
      
    }

  }

  public play(){

    try {

      this.backgroundMode.enable();

      this.backgroundMode.on("activate").subscribe(()=>{

        this.radio.play();
        this.playpauseBoolean = true;

      });
      
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

        this.backgroundMode.on("activate").subscribe(()=>{
          this.radio.pause();
        });
        this.radio.pause();
        this.playpauseBoolean = false;

        
      } catch (error) { this.presentToast("pause error"); }

     
    } else {

      try {

        this.backgroundMode.on("activate").subscribe(()=>{
          this.radio.play();
        });
        this.radio.play();
        this.playpauseBoolean = true;
        
      } catch (error) { this.presentToast("play error"); }

      
    }
  }

 
}
