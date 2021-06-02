import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Parallax5Page } from './parallax5.page';

const routes: Routes = [
  {
    path: '',
    component: Parallax5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Parallax5PageRoutingModule {}
