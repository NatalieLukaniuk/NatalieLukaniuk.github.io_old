import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax2',
  templateUrl: './parallax2.page.html',
  styleUrls: ['./parallax2.page.scss'],
})
export class Parallax2Page implements OnInit {

parallaxContainer: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.parallaxContainer = document.getElementById('parallax');
  }

}
