import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaksiranPaymentPageRoutingModule } from './taksiran-payment-routing.module';

import { TaksiranPaymentPage } from './taksiran-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaksiranPaymentPageRoutingModule
  ],
  declarations: [TaksiranPaymentPage]
})
export class TaksiranPaymentPageModule {}
