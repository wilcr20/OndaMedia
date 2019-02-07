import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor( private router: Router, private storage: Storage ) {  }

  public automatic:boolean; // Flag Reproduccion automatica
  public arrow :boolean = false;

  ngOnInit() {
    this.getAutomaticValue(); // Al entrar a page, se verifica la configuracion realizada por el User
    $('.chat-body').slideToggle('slow');
  }

  getAutomaticValue(){
    this.storage.get('automatic').then((val) => {
      this.automatic= val;
      if(this.automatic){ //True
        document.getElementById("switchAutom").setAttribute('checked', 'checked');
      }
    });
  }

  setAutomaticValue(){
    let newAuto = !this.automatic;  // Se coloca el inverso al mover switch
    this.automatic = newAuto;
    this.storage.set('automatic', newAuto);    
  }

  switch(){
    this.setAutomaticValue(); // True --> False, False --> True
  }

  privacy(){
    this.router.navigate(['/menu/privacy']);
  }

  

  expandBox(){
    $('.chat-body').slideToggle('slow');
    this.arrow = !this.arrow;
}

}
