import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
color = 'light';
  intViewportWidth = window.innerWidth;
  constructor(private readonly router: Router, ) {}

  ngOnInit() {
console.log(this.intViewportWidth);
  }
  goRemApp(){
    this.router.navigate(['rem-app']);
  }

  goToDo(){
    this.router.navigate(['to-do-list-app']);
  }
}
