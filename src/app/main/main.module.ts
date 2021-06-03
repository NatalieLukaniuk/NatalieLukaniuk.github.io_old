import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainPageRoutingModule } from './main-routing.module';
import {AppSharedModule} from '../app-shared.module';

import { MainPage } from './main.page';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {ContentService} from './content.service';
import {OpeningContainerComponent} from './components/opening-container/opening-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageRoutingModule,
    AppSharedModule,
      AngularSvgIconModule
  ],
  declarations: [MainPage, OpeningContainerComponent],
    providers: [ContentService]
})
export class MainPageModule {}
