import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemAppPageRoutingModule } from './rem-app-routing.module';

import { RemAppPage } from './rem-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemAppPageRoutingModule
  ],
  declarations: [RemAppPage]
})
export class RemAppPageModule {}
