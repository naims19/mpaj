import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FpxDewanPage } from './fpx-dewan.page';

const routes: Routes = [
  {
    path: '',
    component: FpxDewanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FpxDewanPageRoutingModule {}
