import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatementMobilePage } from './statement-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: StatementMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatementMobilePageRoutingModule {}
