import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KompaunPage } from './kompaun.page';

const routes: Routes = [
  {
    path: '',
    component: KompaunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KompaunPageRoutingModule {}
