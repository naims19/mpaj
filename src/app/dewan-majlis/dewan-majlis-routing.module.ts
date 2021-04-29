import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DewanMajlisPage } from './dewan-majlis.page';

const routes: Routes = [
  {
    path: '',
    component: DewanMajlisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DewanMajlisPageRoutingModule {}
