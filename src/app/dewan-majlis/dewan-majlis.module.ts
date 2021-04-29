import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DewanMajlisPageRoutingModule } from './dewan-majlis-routing.module';

import { DewanMajlisPage } from './dewan-majlis.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DewanMajlisPageRoutingModule,
    CalendarModule
  ],
  declarations: [DewanMajlisPage]
})
export class DewanMajlisPageModule {}
