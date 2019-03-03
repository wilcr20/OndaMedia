import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerComponent } from '../player/player/player.component';
import {GeneralService} from '../services/general.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;

  constructor( private router: Router, public geneServ:GeneralService) { }

  ngOnInit() {
    this.Audio.page = "other";
  }

  //Variables NgIf del Switch 
  ve1:boolean=false;
  ve2=false;
  ve3:boolean=false;
  ve4=false;ve5=false;ve6=false;ve7=false;

  openInfo(id){
    //console.log("Presiona ", id)
    this.allFalse();
     
    switch(id) {   // Case para validar los id's recibidos 
      case 1: { 
         this.ve1=!(this.ve1);
         break; 
      } 
      case 2: { 
        this.ve2=!(this.ve2);
         break; 
      } 
      case 3: { 
          this.ve3 = !(this.ve3);
        break; 
     } 
     case 4: { 
      this.ve4=!(this.ve4);
        break; 
     } 
     case 5: { 
      this.ve5=!(this.ve5);
      break; 
    } 
    case 6: { 
      this.ve6=!(this.ve6);
        break; 
    } 
    case 7: { 
      this.ve7=!(this.ve7);
        break; 
    } 
     
   } 

  }

  allFalse(){
    this.ve1=false;this.ve2=false;this.ve3=false;this.ve4=false;this.ve5=false;this.ve6=false;this.ve7=false;
  }
  

  back(){
    this.router.navigate(['/menu/config']);
  }

}
