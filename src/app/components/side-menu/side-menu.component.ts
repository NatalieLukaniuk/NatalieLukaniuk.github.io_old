import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  navigate = [
    {
      title : 'Home',
      url   : '/home',
      icon  : 'home',
    },
    {
      title : 'Rem generator',
      url   : '/rem-app',
      icon  : 'calculator-outline',
    },
    {
      title : 'Rem converter',
      url   : '/rem-converter',
      icon  : 'calculator-outline',
    },
    {
      title : 'To-do list',
      url   : '/to-do-list-app',
      icon  : 'reader-outline'
    },
  ];
  constructor() {}

  ngOnInit() {}

}
