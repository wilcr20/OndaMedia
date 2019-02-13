import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import {GeneralService} from '../services/general.service';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor( private router: Router , private genServ:GeneralService) {  }

  public arrow :boolean = false;
  
  ngOnInit() { 

    this.genServ.getAutomaticValue(); // Al entrar a page, se verifica la configuracion realizada por el User
    let hideFooterTimeout = setTimeout( () => {  // Use await/async
      
      if(this.genServ.automatic == true){ //True
        document.getElementById("switchAutom").setAttribute('checked', 'checked');
      }
    }, 600);

  }
  
 
  switch(){
    this.genServ.setAutomaticValue(); // True --> False, False --> True
  }

  privacy(){
    this.router.navigate(['/menu/privacy']);
  }

  expandBox(){
    $('.chat-body').slideToggle('slow');
    this.arrow = !this.arrow;
}

}
