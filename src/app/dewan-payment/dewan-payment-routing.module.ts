import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DewanPaymentPage } from './dewan-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DewanPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DewanPaymentPageRoutingModule {}
