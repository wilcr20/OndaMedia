import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player/player.component';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;


  constructor() { }

  ngOnInit() {

    this.Audio.page = "other";
  }

}
