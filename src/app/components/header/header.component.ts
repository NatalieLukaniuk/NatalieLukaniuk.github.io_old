import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() color: any;
  @Input() useContainer: boolean;
  viewportWidth = window.innerWidth;
  buttons = [
    {
      title : 'Home',
      url   : 'home',
      icon  : 'home',
    },
    {
      title : 'Rem generator',
      url   : 'rem-app',
      icon  : 'calculator-outline',
    },
    {
      title : 'Rem converter',
      url   : 'rem-converter',
      icon  : 'calculator-outline',
    },
    {
      title : 'To-do list',
      url   : 'to-do-list-app',
      icon  : 'reader-outline'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.viewportWidth);
  }
  goTo(url){
  this.router.navigate([url]);
}
}
