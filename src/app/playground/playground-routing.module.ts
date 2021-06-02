import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundPage } from './playground.page';

const routes: Routes = [
  {
    path: '',
    component: PlaygroundPage
  },
  {
    path: 'parallax2',
    loadChildren: () => import('./parallax2/parallax2.module').then( m => m.Parallax2PageModule)
  },
  {
    path: 'parallax1',
    loadChildren: () => import('./parallax1/parallax1.module').then( m => m.Parallax1PageModule)
  },
  {
    path: 'parallax3',
    loadChildren: () => import('./parallax3/parallax3.module').then( m => m.Parallax3PageModule)
  },
  {
    path: 'parallax4',
    loadChildren: () => import('./parallax4/parallax4.module').then( m => m.Parallax4PageModule)
  },
  {
    path: 'parallax5',
    loadChildren: () => import('./parallax5/parallax5.module').then( m => m.Parallax5PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundPageRoutingModule {}
