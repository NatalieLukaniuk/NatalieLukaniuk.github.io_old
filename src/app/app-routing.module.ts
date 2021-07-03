import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'main',
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
    path: 'useful-information',
    loadChildren: () => import('./useful-information/useful-information.module').then( m => m.UsefulInformationPageModule)
  },
  {
    path: 'converter',
    loadChildren: () => import('./converter/converter.module').then( m => m.ConverterPageModule)
  },
  {
    path: 'playground',
    loadChildren: () => import('./playground/playground.module').then( m => m.PlaygroundPageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },  {
    path: 'gigital',
    loadChildren: () => import('./test-tasks/gigital/gigital.module').then( m => m.GigitalPageModule)
  },
  {
    path: 'gigital-ui',
    loadChildren: () => import('./test-tasks/gigital-ui/gigital-ui.module').then( m => m.GigitalUiPageModule)
  },
  {
    path: 'organizer',
    loadChildren: () => import('./organizer/organizer.module').then( m => m.OrganizerPageModule)
  },
  {
    path: 'to-do-app',
    loadChildren: () => import('./to-do-app/to-do-app.module').then( m => m.ToDoAppPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
