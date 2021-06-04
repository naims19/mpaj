import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatementWebPage } from './statement-web.page';

const routes: Routes = [
  {
    path: '',
    component: StatementWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatementWebPageRoutingModule {}
