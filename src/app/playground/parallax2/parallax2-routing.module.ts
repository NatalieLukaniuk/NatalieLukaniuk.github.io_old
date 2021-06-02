import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Parallax2Page } from './parallax2.page';

const routes: Routes = [
  {
    path: '',
    component: Parallax2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Parallax2PageRoutingModule {}
