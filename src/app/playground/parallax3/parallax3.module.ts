import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Parallax3PageRoutingModule } from './parallax3-routing.module';

import { Parallax3Page } from './parallax3.page';
import {AppSharedModule} from '../../app-shared.module';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { TextAppearingOnScrollDirective } from './directives/text-appearing-on-scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Parallax3PageRoutingModule,
    AppSharedModule,
    AngularSvgIconModule
  ],
  declarations: [Parallax3Page, TextAppearingOnScrollDirective]
})
export class Parallax3PageModule {}
