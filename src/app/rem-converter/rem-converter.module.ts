import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemConverterPageRoutingModule } from './rem-converter-routing.module';

import { RemConverterPage } from './rem-converter.page';
import {AppSharedModule} from '../app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemConverterPageRoutingModule,
    AppSharedModule
  ],
  declarations: [RemConverterPage]
})
export class RemConverterPageModule {}
