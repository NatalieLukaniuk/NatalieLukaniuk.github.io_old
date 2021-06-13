import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigitalPageRoutingModule } from './gigital-routing.module';

import { GigitalPage } from './gigital.page';
import {HttpClientModule} from '@angular/common/http';
import {ArtistsService} from './artists-service/artists.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigitalPageRoutingModule,
      HttpClientModule
  ],
  declarations: [GigitalPage],
    providers: [ArtistsService]
})
export class GigitalPageModule {}
