import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'news', loadChildren: '../news/news.module#NewsPageModule' },
      { path: 'we-us', loadChildren: '../we-us/we-us.module#WeUsPageModule' },
      { path: 'on-tv', loadChildren: '../on-tv/on-tv.module#OnTvPageModule' },
      { path: 'radio-channels', loadChildren: '../radio-channels/radio-channels.module#RadioChannelsPageModule' },
      { path: 'our-app', loadChildren: '../our-app/our-app.module#OurAppPageModule' },
      { path: 'contact', loadChildren: '../contact/contact.module#ContactPageModule' },
      { path: 'privacy', loadChildren: '../privacy/privacy.module#PrivacyPageModule' },
      { path: 'config', loadChildren: '../config/config.module#ConfigPageModule' },
      { path: 'channel', loadChildren: '../channel/channel.module#ChannelPageModule' },
      { path: 'note', loadChildren: '../note/note.module#NotePageModule' },
    ] 
  }
  ,{
    path:'',
    redirectTo: '/menu/home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
