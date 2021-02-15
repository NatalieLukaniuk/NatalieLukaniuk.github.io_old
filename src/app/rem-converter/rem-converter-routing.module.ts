import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemConverterPage } from './rem-converter.page';

const routes: Routes = [
  {
    path: '',
    component: RemConverterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemConverterPageRoutingModule {}
