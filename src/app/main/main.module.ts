import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';
import {AppSharedModule} from '../app-shared.module';

import { MainPage } from './main.page';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    AppSharedModule,
      AngularSvgIconModule
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
