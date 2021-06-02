import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Parallax4Page } from './parallax4.page';

const routes: Routes = [
  {
    path: '',
    component: Parallax4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Parallax4PageRoutingModule {}
