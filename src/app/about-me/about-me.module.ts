import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';

import { AboutMePage } from './about-me.page';
import {AppSharedModule} from '../app-shared.module';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutMePageRoutingModule,
    AppSharedModule,
    AngularSvgIconModule
  ],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
