import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax4',
  templateUrl: './parallax4.page.html',
  styleUrls: ['./parallax4.page.scss'],
})
export class Parallax4Page implements OnInit {
card1: HTMLElement; // for rotateCards directive
card2: HTMLElement; // for rotateCards directive
card3: HTMLElement; // for rotateCards directive
  prod = true;
  intViewportWidth = window.innerWidth;
  constructor() { }

  ngOnInit() {
    this.card1 = document.getElementById('card1'); // for rotateCards directive
    this.card2 = document.getElementById('card2'); // for rotateCards directive
    this.card3 = document.getElementById('card3'); // for rotateCards directive
  }

}
