import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {HeaderComponent} from './components/header/header.component';
import {RemConverterComponent} from './components/rem-converter/rem-converter.component';
import {CheatsheetsDataService} from './services/cheatsheets-data.service';
import {RouterModule} from '@angular/router';
import {SubmenuPopoverComponent} from './components/header/submenu-popover/submenu-popover.component';
import {FooterComponent} from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import {LanguageService} from './services/language.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    HttpClientModule, AngularSvgIconModule.forRoot()
  ],
  declarations: [HeaderComponent, RemConverterComponent, SubmenuPopoverComponent, FooterComponent],
  exports: [HeaderComponent, RemConverterComponent, FooterComponent],
  providers: [CheatsheetsDataService, LanguageService]
})
export class AppSharedModule {}
