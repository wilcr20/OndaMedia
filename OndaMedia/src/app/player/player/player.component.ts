import { Component, OnInit } from '@angular/core';
import { MenuController} from '@ionic/angular';
import * as $ from 'jquery'
import { GeneralService } from '../../services/general.service';
import { RadioService } from '../../services/radio.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  public arrow :boolean = false;
  public page  :string  = "init";

  public contact = [{url:'https://www.ondamedia.es/wp-content/uploads/2019/01/alberto-herreros2.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/serezade-segui.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/SM.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/nerea-enguidanos.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/salva_balbastre.png'}];


  constructor(
    public menuCtrl: MenuController,
    public genServ: GeneralService,
    public RadioService: RadioService) {

    this.menuCtrl.enable(true);
    this.contact.reverse();
   }

  ngOnInit( ) {

    this.automaticPlay();
    this.initExpandBox();
  
  }

  public initExpandBox(){

    if(this.page == "home"){

      this.arrow = false;
      $('.chat-body').slideUp("fast");
    
    }else{

        if(this.arrow == true){

          this.arrow = false;
          $('.chat-body').slideUp("fast");

        }else{

          this.arrow = false;
          $('.chat-body').slideUp("fast");
        }
      }
  }
  
  public automaticPlay(){

    this.genServ.getAutomaticValue(); 

    let hideFooterTimeout = setTimeout( () => {  

      if(this.genServ.automatic == true){  

        this.RadioService.play();

      }
    }, 800);
 
  }

  public expandBox(){

    $('.chat-body').slideToggle('slow');
      this.arrow = !this.arrow;
  }

}