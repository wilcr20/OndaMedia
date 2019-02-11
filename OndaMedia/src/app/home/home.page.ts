import { Component, OnInit, ViewChild } from '@angular/core';
import { PlayerComponent } from '../player/player/player.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  @ViewChild(PlayerComponent) Audio: PlayerComponent;

  constructor () {}

  ngOnInit() {}

  
}
