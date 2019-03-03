import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player/player.component';
import {GeneralService} from '../services/general.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;


  constructor( public geneServ:GeneralService) { }

  ngOnInit() {

    this.Audio.page = "other";
  }

}
