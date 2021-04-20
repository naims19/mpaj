import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaksiranPaymentPage } from './taksiran-payment.page';

const routes: Routes = [
  {
    path: '',
    component: TaksiranPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaksiranPaymentPageRoutingModule {}
