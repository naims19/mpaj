import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DewanBadmintonPageRoutingModule } from './dewan-badminton-routing.module';

import { DewanBadmintonPage } from './dewan-badminton.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DewanBadmintonPageRoutingModule,
    CalendarModule
  ],
  declarations: [DewanBadmintonPage]
})
export class DewanBadmintonPageModule {}
