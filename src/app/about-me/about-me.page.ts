import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  color = 'tertiary';
  intViewportWidth = window.innerWidth;
  constructor() { }

  ngOnInit() {
  }

}
