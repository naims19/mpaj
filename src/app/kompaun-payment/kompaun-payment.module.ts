import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KompaunPaymentPageRoutingModule } from './kompaun-payment-routing.module';

import { KompaunPaymentPage } from './kompaun-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KompaunPaymentPageRoutingModule
  ],
  declarations: [KompaunPaymentPage]
})
export class KompaunPaymentPageModule {}
