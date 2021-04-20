import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpxPageRoutingModule } from './fpx-routing.module';

import { FpxPage } from './fpx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FpxPageRoutingModule
  ],
  declarations: [FpxPage]
})
export class FpxPageModule {}
