import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  color = 'tertiary';
  intViewportWidth = window.innerWidth;
  containers = {
    experienceDetails: false,
    toolsDetails: false,
    softSkillsDetails: false,
    learningDetails: false,
    portfolio: false
  };

  constructor() {
  }

  ngOnInit() {
  }

  toggleContainer(containerId) {
    const keys = Object.keys(this.containers);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === containerId) {
        this.containers[keys[i]] = !this.containers[keys[i]];
      } else {
        this.containers[keys[i]] = false;
      }
    }
  }
}
