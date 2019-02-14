import { Component, OnInit } from '@angular/core';

import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';



@Component({
  selector: 'app-on-tv',
  templateUrl: './on-tv.page.html',
  styleUrls: ['./on-tv.page.scss'],
})
export class OnTvPage implements OnInit {

  constructor( private streamingMedia: StreamingMedia) { 
    
  }

  ngOnInit() {
    this.playVideo();
  }

  playVideo(){
    console.log("playing video ...")
    let options: StreamingVideoOptions = {
         successCallback: () => { console.log('Video played') },
         errorCallback: (e) => { console.log('Error streaming') },
         orientation: 'portrait'
        }
        this.streamingMedia.playVideo('http://37.187.7.106/ondamusical/live.m3u8', options);

  }

  
 

}
