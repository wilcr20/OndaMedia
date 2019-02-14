import { Component, OnInit } from '@angular/core';
import {Router, RouterEvent} from '@angular/router'


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
    color:"green"
  },
  {
    title: "La lista",
    url:"/menu/we-us",
    icon:'list',
    color:"yellow"
  },
  {
    title: "Programas y podcats",
    url:"/menu/radio-channels",
    icon:'microphone',
    color:"blue"
  },
  {
    title: "Actualidad",
    url:"/menu/news",
    icon:'paper',
    color:"danger"
  },
  {
    title: "On Tv",
    url:"/menu/on-tv",
    icon:'tv',
    color:"secondary"
  }, 
  {
    title: "Configuración",
    url:"/menu/config",
    icon:'settings',
    color:"success"
  }
];

  selectedPath = ''; // Verifica el path seleccionado

  constructor( private router:Router) {
    this.router.events.subscribe( (event:RouterEvent) =>{
        this.selectedPath=event.url; // Realiza rl moviemiento de Page dinamico
    });
   }

  ngOnInit() {
  }

  

}
