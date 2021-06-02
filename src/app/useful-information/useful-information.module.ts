import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsefulInformationPageRoutingModule } from './useful-information-routing.module';

import { UsefulInformationPage } from './useful-information.page';
import {AppSharedModule} from '../app-shared.module';
import {CheatsheetComponent} from '../components/cheatsheet/cheatsheet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsefulInformationPageRoutingModule,
    AppSharedModule
  ],
  declarations: [UsefulInformationPage, CheatsheetComponent]
})
export class UsefulInformationPageModule {}
