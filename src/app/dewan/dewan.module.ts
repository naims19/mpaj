import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DewanPageRoutingModule } from './dewan-routing.module';

import { DewanPage } from './dewan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DewanPageRoutingModule
  ],
  declarations: [DewanPage]
})
export class DewanPageModule {}
