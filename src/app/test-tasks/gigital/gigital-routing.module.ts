import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GigitalPage } from './gigital.page';

const routes: Routes = [
  {
    path: '',
    component: GigitalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigitalPageRoutingModule {}
