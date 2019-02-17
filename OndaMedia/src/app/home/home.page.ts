import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player/player.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;

  public playpause: boolean = false;

  constructor (private router: Router) {}

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
