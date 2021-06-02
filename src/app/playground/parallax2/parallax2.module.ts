import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parallax2PageRoutingModule } from './parallax2-routing.module';

import { Parallax2Page } from './parallax2.page';
import { ParallaxDirective } from './parallax.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parallax2PageRoutingModule
  ],
  declarations: [Parallax2Page, ParallaxDirective]
})
export class Parallax2PageModule {}
