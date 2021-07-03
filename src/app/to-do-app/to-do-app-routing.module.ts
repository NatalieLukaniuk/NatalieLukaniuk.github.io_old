import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoAppPage } from './to-do-app.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoAppPageRoutingModule {}
