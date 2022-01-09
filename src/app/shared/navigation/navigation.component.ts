import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  nav = [
    {name: 'Work Experience', path: 'experience'},
    // {name: 'Technology stack', path: 'stack'},
    // {name: 'Tools I’ve worked with', path: 'tools'},
    // {name: 'Soft Skills', path: 'softSkills'},
    {name: 'About Me', path: 'about'},
    // {name: 'Contacts', path: 'contacts'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
