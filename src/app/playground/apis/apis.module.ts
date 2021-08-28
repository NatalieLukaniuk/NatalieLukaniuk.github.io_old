import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

import { ApisPageRoutingModule } from './apis-routing.module';

import { ApisPage } from './apis.page';
import {AppSharedModule} from '../../app-shared.module';
import {CurrencyConverterService} from './services/currency-converter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      HttpClientModule,
    IonicModule,
    ApisPageRoutingModule,
      AppSharedModule
  ],
  declarations: [ApisPage],
    providers: [CurrencyConverterService]
})
export class ApisPageModule {}
