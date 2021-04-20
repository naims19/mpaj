import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KompaunPaymentPage } from './kompaun-payment.page';

const routes: Routes = [
  {
    path: '',
    component: KompaunPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KompaunPaymentPageRoutingModule {}
