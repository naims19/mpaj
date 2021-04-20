import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaksiranPage } from './taksiran.page';

const routes: Routes = [
  {
    path: '',
    component: TaksiranPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaksiranPageRoutingModule {}
