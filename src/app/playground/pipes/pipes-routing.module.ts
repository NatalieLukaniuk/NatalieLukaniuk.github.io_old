import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipesPage } from './pipes.page';

const routes: Routes = [
  {
    path: '',
    component: PipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PipesPageRoutingModule {}
