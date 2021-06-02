import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoListAppPageRoutingModule } from './to-do-list-app-routing.module';

import { ToDoListAppPage } from './to-do-list-app.page';
import {AppSharedModule} from '../app-shared.module';
import {TaskAddComponent} from './components/task-add/task-add.component';
import {ListContentComponent} from './components/list-content/list-content.component';
import {ListMenuComponent} from './components/list-menu/list-menu.component';
import {EditPopoverComponent} from './components/edit-popover/edit-popover.component';
import {NewListPopoverComponent} from './components/new-list-popover/new-list-popover.component';
import {TasksServiceService} from './services/tasks-service.service';
import {PrintSettingsComponent} from './components/print-settings/print-settings.component';
import {PrintPreviewComponent} from './components/print-preview/print-preview.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoListAppPageRoutingModule,
    AppSharedModule,
  ],
  declarations: [ToDoListAppPage,
    NewListPopoverComponent,
    TaskAddComponent,
    ListContentComponent,
    ListMenuComponent,
    EditPopoverComponent,
  PrintSettingsComponent,
  PrintPreviewComponent],
  providers: [TasksServiceService]
})
export class ToDoListAppPageModule {}
