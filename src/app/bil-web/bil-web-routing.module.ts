import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilWebPage } from './bil-web.page';

const routes: Routes = [
  {
    path: '',
    component: BilWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilWebPageRoutingModule {}
