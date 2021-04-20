import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReturnPaymentPage } from './return-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ReturnPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnPaymentPageRoutingModule {}
