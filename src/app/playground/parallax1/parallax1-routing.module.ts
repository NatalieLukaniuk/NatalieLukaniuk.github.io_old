import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Parallax1Page } from './parallax1.page';

const routes: Routes = [
  {
    path: '',
    component: Parallax1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Parallax1PageRoutingModule {}
