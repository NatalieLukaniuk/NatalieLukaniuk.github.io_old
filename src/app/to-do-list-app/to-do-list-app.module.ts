import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoListAppPageRoutingModule } from './to-do-list-app-routing.module';

import { ToDoListAppPage } from './to-do-list-app.page';
import {NewListPopoverComponent} from '../components/new-list-popover/new-list-popover.component';
import {HeaderComponent} from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListAppPageRoutingModule
  ],
  declarations: [ToDoListAppPage, NewListPopoverComponent, HeaderComponent]
})
export class ToDoListAppPageModule {}
