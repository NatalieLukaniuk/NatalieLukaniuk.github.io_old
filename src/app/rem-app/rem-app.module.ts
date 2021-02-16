import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemAppPageRoutingModule } from './rem-app-routing.module';

import { RemAppPage } from './rem-app.page';
import {AppSharedModule} from '../app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemAppPageRoutingModule,
    AppSharedModule
  ],
  declarations: [RemAppPage]
})
export class RemAppPageModule {}
