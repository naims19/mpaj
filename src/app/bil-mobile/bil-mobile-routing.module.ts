import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilMobilePage } from './bil-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: BilMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilMobilePageRoutingModule {}
