import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StreamingMedia } from '@ionic-native/streaming-media/ngx';

import { IonicStorageModule } from '@ionic/storage';
import { ComponentsModule } from './player/components.module';
import { PlayerComponent } from './player/player/player.component';


@NgModule({

  
  declarations: [AppComponent],

  entryComponents: [],

  imports: [
    ComponentsModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()],

  providers: [
    PlayerComponent,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    StreamingMedia,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
