import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilWebPageRoutingModule } from './bil-web-routing.module';

import { BilWebPage } from './bil-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilWebPageRoutingModule
  ],
  declarations: [BilWebPage]
})
export class BilWebPageModule {}
