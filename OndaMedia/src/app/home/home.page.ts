import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player/player.component';
import { Router } from '@angular/router';
import { RadioService } from '../services/radio.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;


  constructor (public router: Router, 
               public radioService: RadioService) {}

  ngOnInit() {
    this.Audio.page = "home";
  }

  openPage(page) {  

    try {

      switch(page) {
        case "note":
            this.router.navigate(['/menu/note']);
            break;
        default:
      }

    } catch (error) {
      console.log(error);
    }
  
  }
 

}
