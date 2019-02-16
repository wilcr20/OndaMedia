import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery'
import {GeneralService} from '../services/general.service';
import { PlayerComponent } from '../player/player/player.component';


@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;

  
  constructor( private router: Router , private genServ:GeneralService) {  }

  public arrow :boolean = false;
  public automatic:boolean = false;
  
  ngOnInit() { 

    this.Audio.page = "other";

    this.genServ.getAutomaticValue(); // Al entrar a page, se verifica la configuracion realizada por el User
    let hideFooterTimeout = setTimeout( () => {  // Use await/async
      
      this.automatic =  this.genServ.automatic;

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
