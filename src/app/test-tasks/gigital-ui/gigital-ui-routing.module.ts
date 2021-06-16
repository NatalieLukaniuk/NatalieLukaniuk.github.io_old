import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GigitalUiPage } from './gigital-ui.page';

const routes: Routes = [
  {
    path: '',
    component: GigitalUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigitalUiPageRoutingModule {}
