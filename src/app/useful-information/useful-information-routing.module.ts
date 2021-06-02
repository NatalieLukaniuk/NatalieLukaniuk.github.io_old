import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsefulInformationPage } from './useful-information.page';

const routes: Routes = [
  {
    path: '',
    component: UsefulInformationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsefulInformationPageRoutingModule {}
