import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationBusPage } from './location-bus.page';

const routes: Routes = [
  {
    path: '',
    component: LocationBusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationBusPageRoutingModule {}
