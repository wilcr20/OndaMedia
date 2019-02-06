import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  /*
  pages =[
    {
      title: "INICIO",
      url:"/menu/home",
      icon:"home"
    },
    {
      title: "NOSOTROS",
      url:"/menu/we-us",
      icon:'people'
    },
    {
      title: "NOTICIAS",
      url:"/menu/news",
      icon:'paper'
    },
    {
      title: "EVENTOS",
      url:"/menu/events",
      icon:'stopwatch'
    },
    {
      title: "CANALES DE RADIO",
      url:"/menu/radio-channels",
      icon:'radio'
    },
    {
      title: "ON TV",
      url:"/menu/on-tv",
      icon:'videocam'
    },
    {
      title: "NUESTRA APP",
      url:"/menu/our-app",
      icon:'phone-portrait'
    },{
      title: "CONTACTO",
      url:"/menu/contact",
      icon:'chatbubbles'
    },
    {
      title: "CENTRO DE PRIVACIDAD",
      url:"/menu/privacy",
      icon:'key'
    }
  ];
  */

 pages =[
  {
    title: "En directo",
    url:"/menu/home",
    icon:"play"
  },
  {
    title: "La lista",
    url:"/menu/we-us",
    icon:'list'
  },
  {
    title: "Programas y podcats",
    url:"/menu/news",
    icon:'microphone'
  },
  {
    title: "Actualidad",
    url:"/menu/events",
    icon:'paper'
  },
  {
    title: "Configuración",
    url:"/menu/radio-channels",
    icon:'settings'
  }
];

  selectedPath = ''; // Verifica el path seleccionado

  constructor( private router:Router) {
    this.router.events.subscribe( (event:RouterEvent) =>{
        this.selectedPath=event.url;
    });
   }

  ngOnInit() {
  }

}
