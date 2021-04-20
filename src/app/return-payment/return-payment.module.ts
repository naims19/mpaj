import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReturnPaymentPageRoutingModule } from './return-payment-routing.module';

import { ReturnPaymentPage } from './return-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReturnPaymentPageRoutingModule
  ],
  declarations: [ReturnPaymentPage]
})
export class ReturnPaymentPageModule {}
