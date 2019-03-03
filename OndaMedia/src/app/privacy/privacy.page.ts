import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerComponent } from '../player/player/player.component';
import { GeneralService } from '../services/general.service';


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.page.html',
  styleUrls: ['./privacy.page.scss'],
})
export class PrivacyPage implements OnInit {

  @ViewChild(PlayerComponent) Audio: PlayerComponent;

  constructor(private router: Router, public geneServ: GeneralService) { }

  ngOnInit() {
    this.Audio.page = "other";
  }

  //Variables NgIf del Switch 
  ve1: boolean = false; ve2 = false; ve3: boolean = false;
  ve4: boolean = false; ve5: boolean = false; ve6: boolean = false; ve7: boolean = false;

  openInfo(id: number) {
    //this.allFalse();
    if (id == 1) {
      this.ve1 = !this.ve1;
    }
    if (id == 2) {
      this.ve2 = !this.ve2;
    }
    if (id == 3) {
      this.ve3 = !this.ve3;
    }
    if (id == 4) {
      this.ve4 = !this.ve4;
    }
    if (id == 5) {
      this.ve5 = !this.ve5;
    }
    if (id == 6) {
      this.ve6 = !this.ve6;
    }
    if (id == 7) {
      this.ve7 = !this.ve7;
    }

  }

  allFalse() {
    this.ve1 = false; this.ve2 = false; this.ve3 = false; this.ve4 = false; this.ve5 = false; this.ve6 = false; this.ve7 = false;
  }


  back() {
    this.router.navigate(['/menu/config']);
  }

}
