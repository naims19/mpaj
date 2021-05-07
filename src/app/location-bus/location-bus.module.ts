import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocationBusPageRoutingModule } from './location-bus-routing.module';

import { LocationBusPage } from './location-bus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocationBusPageRoutingModule
  ],
  declarations: [LocationBusPage]
})
export class LocationBusPageModule {}
