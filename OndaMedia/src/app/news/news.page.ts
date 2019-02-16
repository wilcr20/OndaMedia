import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerComponent } from '../player/player/player.component';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;


  constructor(private router: Router) { }

  ngOnInit() {
    this.Audio.page = "other";
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
