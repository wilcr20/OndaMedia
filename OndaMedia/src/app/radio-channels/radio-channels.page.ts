import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerComponent } from '../player/player/player.component';

@Component({
  selector: 'app-radio-channels',
  templateUrl: './radio-channels.page.html',
  styleUrls: ['./radio-channels.page.scss'],
})
export class RadioChannelsPage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;

  public type:  string = "Programas";

  public slideOpts = {
    effect: 'flip'
  };
  
  public contact = [ {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/ONRADIO-9-880x529.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/codigofm-880x529.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/ON-URBAN-880x529.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2014/11/ON-HITS-880x529.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2014/11/ON-WORK-880x529.png'},
                     {url:'https://www.ondamedia.es/wp-content/uploads/2014/11/ON-DANCE-880x529.png'}];

  constructor(private router: Router) { }

  ngOnInit() {
    this.Audio.page = "other";
  }

  openPage(page) {  

    try {

      switch(page) {
        case "channel":
            this.router.navigate(['/menu/channel']);
            break;
        default:
      }

    } catch (error) {
      console.log(error);
    }
  
  }

}

