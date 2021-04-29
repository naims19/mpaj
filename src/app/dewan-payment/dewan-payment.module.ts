import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DewanPaymentPageRoutingModule } from './dewan-payment-routing.module';

import { DewanPaymentPage } from './dewan-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DewanPaymentPageRoutingModule
  ],
  declarations: [DewanPaymentPage]
})
export class DewanPaymentPageModule {}
