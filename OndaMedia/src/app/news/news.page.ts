import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {

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
