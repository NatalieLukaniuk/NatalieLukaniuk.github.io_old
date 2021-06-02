import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebsiteNavigationService {

  navigation = [
    {
      title : 'Home',
      url   : '/main',
      icon  : 'home',
    },
    {
      title : 'Cheatsheets',
      url   : 'useful-information',
      icon  : 'book-outline',
    },
    {
      title : 'Tools',
      children: [
        {
          title : 'Rem generator',
          url   : '/rem-app',
          icon  : 'calculator-outline',
        },
        {
          title : 'Px converter',
          url   : '/converter',
          icon  : 'calculator-outline',
        },
        {
          title : 'To-do list',
          url   : '/to-do-list-app',
          icon  : 'reader-outline'
        },
      ],
      icon  : 'hammer-outline',
      open: false,
    },
    {
      title : 'Playground',
      url   : 'playground',
      icon  : 'color-palette-outline',
    },
  ];

  constructor() { }
}
