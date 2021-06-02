import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConverterPageRoutingModule } from './converter-routing.module';

import { ConverterPage } from './converter.page';
import {AppSharedModule} from '../app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConverterPageRoutingModule,
    AppSharedModule
  ],
  declarations: [ConverterPage]
})
export class ConverterPageModule {}
