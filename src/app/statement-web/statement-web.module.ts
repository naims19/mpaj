import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatementWebPageRoutingModule } from './statement-web-routing.module';

import { StatementWebPage } from './statement-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StatementWebPageRoutingModule
  ],
  declarations: [StatementWebPage]
})
export class StatementWebPageModule {}
