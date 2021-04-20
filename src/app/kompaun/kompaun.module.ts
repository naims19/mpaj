import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KompaunPageRoutingModule } from './kompaun-routing.module';

import { KompaunPage } from './kompaun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KompaunPageRoutingModule
  ],
  declarations: [KompaunPage]
})
export class KompaunPageModule {}
