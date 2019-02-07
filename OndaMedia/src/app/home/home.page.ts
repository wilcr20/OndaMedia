import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import * as $ from 'jquery'


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

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
    public streamingMedia: StreamingMedia) {

    this.menuCtrl.enable(true);
    this.contact.reverse();
    
   }

  ngOnInit() {
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
  

  
  
}