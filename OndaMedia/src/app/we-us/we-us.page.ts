import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-us',
  templateUrl: './we-us.page.html',
  styleUrls: ['./we-us.page.scss'],
})
export class WeUsPage implements OnInit {

  constructor() { }

  ngOnInit() {
    this.resetPlayButtons();
  }

  playMusic(idM){
    console.log("Play ", idM);
    this.resetPlayButtons();
    //Se habilita el spinner para el boton presionado
    document.getElementById('audio'+idM).setAttribute('src','https://gifimage.net/wp-content/uploads/2017/09/blue-loading-gif-transparent-10.gif')

  }

  resetPlayButtons(){
    let allBtn= document.getElementsByClassName("playButton"); // Obtiene todos los botones de la lista de canciones
    
    for (let i = 0; i < allBtn.length; i++) {  //se les resetea la imagen de play
      allBtn[i].setAttribute('src','http://www.pngmart.com/files/3/Play-Button-PNG-Image.png')   
    }

  }

}
