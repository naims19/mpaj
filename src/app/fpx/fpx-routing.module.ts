import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FpxPage } from './fpx.page';

const routes: Routes = [
  {
    path: '',
    component: FpxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FpxPageRoutingModule {}
