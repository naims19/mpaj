import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpxDewanPageRoutingModule } from './fpx-dewan-routing.module';

import { FpxDewanPage } from './fpx-dewan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FpxDewanPageRoutingModule
  ],
  declarations: [FpxDewanPage]
})
export class FpxDewanPageModule {}
