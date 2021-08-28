import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToDoAppPageRoutingModule } from './to-do-app-routing.module';

import { ToDoAppPage } from './to-do-app.page';
import {AppSharedModule} from '../app-shared.module';
import {TaskComponent} from './components/task/task.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MenuComponent} from './components/menu/menu.component';
import {NewTaskComponent} from './components/new-task/new-task.component';
import {ApiService} from './services/api.service';
import {SaveListComponent} from './components/save-list/save-list.component';
import {LoadListComponent} from './components/load-list/load-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToDoAppPageRoutingModule,
      AppSharedModule,
  ],
  declarations: [
      ToDoAppPage,
      TaskComponent,
      DashboardComponent,
      MenuComponent,
      NewTaskComponent,
      SaveListComponent,
      LoadListComponent
  ],
    providers: [
    ApiService
    ]
})
export class ToDoAppPageModule {}
