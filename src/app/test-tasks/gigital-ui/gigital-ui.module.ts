import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GigitalUiPageRoutingModule } from './gigital-ui-routing.module';

import { GigitalUiPage } from './gigital-ui.page';
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GigitalUiPageRoutingModule,
        AngularSvgIconModule
    ],
  declarations: [GigitalUiPage]
})
export class GigitalUiPageModule {}
