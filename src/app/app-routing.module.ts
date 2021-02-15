import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rem-app',
    loadChildren: () => import('./rem-app/rem-app.module').then( m => m.RemAppPageModule)
  },
  {
    path: 'to-do-list-app',
    loadChildren: () => import('./to-do-list-app/to-do-list-app.module').then( m => m.ToDoListAppPageModule)
  },
  {
    path: 'rem-converter',
    loadChildren: () => import('./rem-converter/rem-converter.module').then( m => m.RemConverterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
