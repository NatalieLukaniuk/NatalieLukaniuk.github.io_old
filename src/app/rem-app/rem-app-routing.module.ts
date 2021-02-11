import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemAppPage } from './rem-app.page';

const routes: Routes = [
  {
    path: '',
    component: RemAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemAppPageRoutingModule {}
