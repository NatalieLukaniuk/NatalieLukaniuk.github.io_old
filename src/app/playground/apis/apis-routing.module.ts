import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApisPage } from './apis.page';

const routes: Routes = [
  {
    path: '',
    component: ApisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApisPageRoutingModule {}
