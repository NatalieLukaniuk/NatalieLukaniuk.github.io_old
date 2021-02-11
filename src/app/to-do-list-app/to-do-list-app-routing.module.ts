import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoListAppPage } from './to-do-list-app.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoListAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoListAppPageRoutingModule {}
