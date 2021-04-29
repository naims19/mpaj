import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DewanBadmintonPage } from './dewan-badminton.page';

const routes: Routes = [
  {
    path: '',
    component: DewanBadmintonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DewanBadmintonPageRoutingModule {}
