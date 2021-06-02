import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaygroundPageRoutingModule } from './playground-routing.module';

import { PlaygroundPage } from './playground.page';
import {AppSharedModule} from '../app-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaygroundPageRoutingModule,
    AppSharedModule
  ],
  declarations: [PlaygroundPage]
})
export class PlaygroundPageModule {}
