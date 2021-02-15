import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemConverterPageRoutingModule } from './rem-converter-routing.module';

import { RemConverterPage } from './rem-converter.page';
import {HeaderComponent} from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemConverterPageRoutingModule
  ],
  declarations: [RemConverterPage, HeaderComponent]
})
export class RemConverterPageModule {}
