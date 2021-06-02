import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax1',
  templateUrl: './parallax1.page.html',
  styleUrls: ['./parallax1.page.scss'],
})
export class Parallax1Page implements OnInit {
  bg: HTMLElement;
  moon: HTMLElement;
  mountain: HTMLElement;
  road: HTMLElement;
  text: HTMLElement;
  constructor() { }

  ngOnInit() {
    this.bg = document.getElementById('bg');
    this.moon = document.getElementById('moon');
    this.mountain = document.getElementById('mountain');
    this.road = document.getElementById('road');
    this.text = document.getElementById('text');
  }

}
