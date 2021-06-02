import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Parallax3Page } from './parallax3.page';

const routes: Routes = [
  {
    path: '',
    component: Parallax3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Parallax3PageRoutingModule {}
