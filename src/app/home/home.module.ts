import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {AppSharedModule} from '../app-shared.module';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { ParallaxDirective } from './directives/parallax.directive';
import {SampleSlidesComponent} from './components/sample-slides/sample-slides.component';
import {LanguageModalComponent} from './components/language-modal/language-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AppSharedModule,
    AngularSvgIconModule
  ],
  declarations: [HomePage, ParallaxDirective, SampleSlidesComponent, LanguageModalComponent]
})
export class HomePageModule {}
