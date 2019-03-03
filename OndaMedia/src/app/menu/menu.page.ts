import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router'
import { MenuController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

 pages =[
  {
    title: "En directo",
    url:"/menu/home",
    icon:"play",
    color:"green",
    keyword:"live"
  },
  {
    title: "La lista",
    url:"/menu/we-us",
    icon:'list',
    color:"yellow",
    keyword:"list"
  },
  {
    title: "Programas y podcasts",
    url:"/menu/radio-channels",
    icon:'microphone',
    color:"blue",
    keyword:"radio"
  },
  {
    title: "Actualidad",
    url:"/menu/news",
    icon:'paper',
    color:"danger",
    keyword:"news" 
  },
  {
    title: "On Tv",
    //url:"/menu/on-tv",
    url:"#", //Actual Page URL
    icon:'tv',
    color:"secondary",
    keyword:"video"
  }, 
  {
    title: "Configuración",
    url:"/menu/config",
    icon:'settings',
    color:"success",
    keyword:"sett"
  }
];

  selectedPath = ''; // Verifica el path seleccionado

  constructor( private router:Router,
    private menu: MenuController,
    private streamingMedia: StreamingMedia) {
    this.router.events.subscribe( (event:RouterEvent) =>{
        this.selectedPath=event.url; // Realiza rl moviemiento de Page dinamico
    });
   }

  ngOnInit() {
  }

  closeMenu(keyword){
    
    this.menu.close();
    if(keyword  == "video"){ // In the actual page 
      this.playVideo();
    }
  }

  playVideo(){
    console.log("playing video ...")
    let options: StreamingVideoOptions = {
         successCallback: () => { console.log('Video played') },
         errorCallback: (e) => { console.log('Error streaming') },
        // orientation: 'portrait' // Orientacion modo vertical
         orientation: 'landscape' // Orientacion modo horizontal
        }
        this.streamingMedia.playVideo('http://37.187.7.106/ondamusical/live.m3u8', options);
  }


  openLink(link) {  

    try {

      switch(link) {
        case "Twitter":
            window.open("https://twitter.com/Onda_Media",'_system', 'location=yes');
            break;
        case "Facebook":
            window.open("https://www.facebook.com/ondamedia.es",'_system', 'location=yes');
            break;
        case "Instagram":
            window.open("https://www.instagram.com/ondamedia.es/",'_system', 'location=yes');
            break;
        case "Google":
            window.open("",'_system', 'location=yes');
            break;
        default:
      }

    } catch (error) {
      console.log(error);
    }
  
  }

}
