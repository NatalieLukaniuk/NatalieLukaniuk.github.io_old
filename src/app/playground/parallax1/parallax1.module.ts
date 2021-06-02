import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parallax1PageRoutingModule } from './parallax1-routing.module';

import { Parallax1Page } from './parallax1.page';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parallax1PageRoutingModule
  ],
  declarations: [Parallax1Page, ParallaxDirective]
})
export class Parallax1PageModule {}
