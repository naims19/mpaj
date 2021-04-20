import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpxKompaunPageRoutingModule } from './fpx-kompaun-routing.module';

import { FpxKompaunPage } from './fpx-kompaun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FpxKompaunPageRoutingModule
  ],
  declarations: [FpxKompaunPage]
})
export class FpxKompaunPageModule {}
