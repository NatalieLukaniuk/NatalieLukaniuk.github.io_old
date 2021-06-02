import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parallax4PageRoutingModule } from './parallax4-routing.module';

import { Parallax4Page } from './parallax4.page';
import {RotateCardsDirective} from './directives/rotate-cards.directive';
import { TextAppearingOnScrollDirective } from './directives/text-appearing-on-scroll.directive';
import { TextTransformationsOnScrollDirective } from './directives/text-transformations-on-scroll.directive';
import {AnimatedIconsComponent} from './components/animated-icons/animated-icons.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parallax4PageRoutingModule
  ],
  declarations: [Parallax4Page, RotateCardsDirective, TextAppearingOnScrollDirective, TextTransformationsOnScrollDirective, AnimatedIconsComponent]
})
export class Parallax4PageModule {}
