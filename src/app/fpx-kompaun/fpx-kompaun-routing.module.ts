import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FpxKompaunPage } from './fpx-kompaun.page';

const routes: Routes = [
  {
    path: '',
    component: FpxKompaunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FpxKompaunPageRoutingModule {}
