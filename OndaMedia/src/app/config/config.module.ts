import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfigPage } from './config.page';
import { ComponentsModule } from '../player/components.module';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ConfigPage]
})
export class ConfigPageModule {}
