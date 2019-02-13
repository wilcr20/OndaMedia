import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.page.html',
  styleUrls: ['./channel.page.scss'],
})
export class ChannelPage implements OnInit {

  public type:  string = "Programas";

  public contact = [ {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/ONRADIO-9-880x529.png'},
  {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/codigofm-880x529.png'},
  {url:'https://www.ondamedia.es/wp-content/uploads/2019/01/ON-URBAN-880x529.png'},
  {url:'https://www.ondamedia.es/wp-content/uploads/2014/11/ON-HITS-880x529.png'},
  {url:'https://www.ondamedia.es/wp-content/uploads/2014/11/ON-WORK-880x529.png'},
  {url:'https://www.ondamedia.es/wp-content/uploads/2014/11/ON-DANCE-880x529.png'}];
  
  constructor() { }

  ngOnInit() {
  }

 
}
