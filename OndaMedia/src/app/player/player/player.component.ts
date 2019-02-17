import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import * as $ from 'jquery'
import { GeneralService } from '../../services/general.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public page = "init";

  public  playpauseBoolean : boolean = false; // Funtion: false=pase audio, true=play audio;
  public  muteunmuteBoolean : boolean = false; // Funtion: false=off audio, true=on audio;

  public audioUrl: string = 'http://streaming1.ondamusicalradio.com:8100/onradio.mp3';


  public contact = [{url:'https://www.ondamedia.es/wp-content/uploads/2019/01/alberto-herreros2.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/serezade-segui.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/SM.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/nerea-enguidanos.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/salva_balbastre.png'}];

  public arrow :boolean = false;

  constructor(
    public menuCtrl: MenuController,
    public streamingMedia: StreamingMedia,
    public genServ: GeneralService,
    public  nativeAudio: NativeAudio,
     public backgroundMode : BackgroundMode) {

    this.menuCtrl.enable(true);
    this.contact.reverse();
    
   }


   

  ngOnInit( ) {

    this.nativeAudio.preloadSimple('uniqueId1', 'http://streaming1.ondamusicalradio.com:8100/onradio.mp3');

    this.automaticPlay();
    this.initExpandBox();
  }

  initExpandBox(){

    if(this.page == "home"){

      this.arrow = false;
      $('.chat-body').slideUp("fast");
    
    }else{

        if(this.arrow == true){

          this.arrow = false;
          $('.chat-body').slideUp("fast");

        }else{

          this.arrow = false;
          $('.chat-body').slideUp("fast");
        }
      }
  }

  
  automaticPlay(){

    this.genServ.getAutomaticValue(); 

    let hideFooterTimeout = setTimeout( () => {  

      if(this.genServ.automatic == true){  

        this.play(); 

      }
    }, 800);
 
  }


  expandBox(){

    $('.chat-body').slideToggle('slow');
      this.arrow = !this.arrow;
  }

  /********* START:  AUDIO FUNTIONS ***********/

  play(){

    // this.nativeAudio.play('uniqueId1');
    // this.playpauseBoolean= true;

    this.backgroundMode.enable(); // Activa segundo plano
    this.backgroundMode.on("activate").subscribe(()=>{
      this.nativeAudio.play('uniqueId1');
      this.playpauseBoolean= true; 
    });
    //this.nativeAudio.play("audio1"),() => console.log('audio1 is done playing'));

    //https://www.techiediaries.com/ionic-background-mode/
    //https://www.freakyjolly.com/ionic-4-keep-it-running-in-background-using-cordova-and-ionic-native-plugins/#more-1506

  }

  playpause(){

      if ( this.playpauseBoolean == true) {

        this.nativeAudio.stop('uniqueId1');
        this.playpauseBoolean = false;
     
      } else {

        this.nativeAudio.play('uniqueId1');
        this.playpauseBoolean = true;
      }
  }
  
  mute(){

    this.nativeAudio.setVolumeForComplexAsset('uniqueId1', 0.6);
    /*
      if(this.audio.volume != 0) {

        this.audio.volume = 0;
        this.muteunmuteBoolean = false;
        
      } else {

        this.audio.volume = 1;
        this.muteunmuteBoolean = true;
    
      }
      */

  }

  /********* END:  AUDIO  FUNTIONS ***********/

}