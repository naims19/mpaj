import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaksiranPageRoutingModule } from './taksiran-routing.module';

import { TaksiranPage } from './taksiran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaksiranPageRoutingModule
  ],
  declarations: [TaksiranPage]
})
export class TaksiranPageModule {}
