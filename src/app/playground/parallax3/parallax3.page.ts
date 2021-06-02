import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax3',
  templateUrl: './parallax3.page.html',
  styleUrls: ['./parallax3.page.scss'],
})
export class Parallax3Page implements OnInit {
  color = 'tertiary';
  arrow: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.arrow = document.getElementById('arrow-icon');
    this.showArrow();
  }
showArrow(){
  setTimeout (() => {
    // console.log(this.arrow);
    this.arrow.classList.add('visible');
  }, 5500);
}
}
