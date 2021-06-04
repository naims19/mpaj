import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilMobilePageRoutingModule } from './bil-mobile-routing.module';

import { BilMobilePage } from './bil-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilMobilePageRoutingModule
  ],
  declarations: [BilMobilePage]
})
export class BilMobilePageModule {}
