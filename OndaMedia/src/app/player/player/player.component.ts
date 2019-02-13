import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import * as $ from 'jquery'
import { GeneralService } from '../../services/general.service';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public  audio = new Audio();
  public  playpauseBoolean : boolean = false; // Funtion: false=pase audio, true=play audio;
  public  muteunmuteBoolean : boolean = false; // Funtion: false=off audio, true=on audio;

  private videoUrl = 'http://37.187.7.106/ondamusical/live.m3u8';
  private audioUrl = 'http://streaming1.ondamusicalradio.com:8100/onradio.mp3';

  private videoOptions: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: (e) => { console.log('Error streaming') },
    orientation: 'landscape',
    shouldAutoClose: true,
    controls: false
  };

  private audioOptions: StreamingAudioOptions = {
    successCallback: () => { console.log('Audio played') },
    errorCallback: (e) => { console.log('Error streaming') }
  };

  public contact = [{url:'https://www.ondamedia.es/wp-content/uploads/2019/01/alberto-herreros2.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/serezade-segui.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/SM.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/nerea-enguidanos.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/salva_balbastre.png'}];

  public arrow :boolean = false;

  constructor(
    public menuCtrl: MenuController,
    public streamingMedia: StreamingMedia,
    private genServ: GeneralService) {

    this.menuCtrl.enable(true);
    this.contact.reverse();
    this.audio.src = "http://streaming1.ondamusicalradio.com:8100/onradio.mp3";
    
   }

  ngOnInit( ) {
    $('.chat-body').slideToggle('slow');

    this.genServ.getAutomaticValue(); // Al entrar a page, se verifica la configuracion realizada por el User
    let hideFooterTimeout = setTimeout( () => {  // Use await/async
      if(this.genServ.automatic == true){ //True
        //document.getElementById("playBtn").click();
        this.play(); // Reproduce automaticamente el directo de audio
        //this.playpauseBoolean= true; //Se habilita Spinner
      }
    }, 800);
 
  }

  playStreamingVideo(){
    this.streamingMedia.playVideo(this.videoUrl, this.videoOptions);
  }

  playStreamingAudio(){
    this.streamingMedia.playAudio(this.audioUrl, this.audioOptions);
  }

  expandBox(){

    $('.chat-body').slideToggle('slow');
      this.arrow = !this.arrow;
  }

  /********* START:  AUDIO FUNTIONS ***********/

  play(){
    this.audio.play();
    this.playpauseBoolean= true; //Se habilita Spinner
  }

  playpause(){

      if ( this.playpauseBoolean == true) {
        
        this.audio.pause();
        this.playpauseBoolean = false;
     
      } else {

        this.audio.play();
        this.playpauseBoolean = true;
      }
  }

    
  mute(){

      if(this.audio.volume != 0) {

        this.audio.volume = 0;
        this.muteunmuteBoolean = false;
        
      } else {

        this.audio.volume = 1;
        this.muteunmuteBoolean = true;
    
      }

  }

  
  
  /********* END:  AUDIO  FUNTIONS ***********/

}