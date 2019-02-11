import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  // { path: 'we-us', loadChildren: './we-us/we-us.module#WeUsPageModule' },
  // { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  // { path: 'on-tv', loadChildren: './on-tv/on-tv.module#OnTvPageModule' },
  // { path: 'radio-channels', loadChildren: './radio-channels/radio-channels.module#RadioChannelsPageModule' },
  // { path: 'our-app', loadChildren: './our-app/our-app.module#OurAppPageModule' },
  // { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  // { path: 'privacy', loadChildren: './privacy/privacy.module#PrivacyPageModule' },
    { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  // { path: 'config', loadChildren: './config/config.module#ConfigPageModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
