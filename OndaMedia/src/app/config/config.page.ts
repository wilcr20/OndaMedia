import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor( private router: Router, private storage: Storage ) {  }

  automatic:boolean; // Flag Reproduccion automatica

  ngOnInit() {
    this.getAutomaticValue(); // Al entrar a page, se verifica la configuracion realizada por el User
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

}
