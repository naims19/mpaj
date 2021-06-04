import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatementMobilePageRoutingModule } from './statement-mobile-routing.module';

import { StatementMobilePage } from './statement-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatementMobilePageRoutingModule
  ],
  declarations: [StatementMobilePage]
})
export class StatementMobilePageModule {}
