import { Component, OnInit } from '@angular/core';
import {WebsiteNavigationService} from '../../services/website-navigation.service';


@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {

  constructor(public nav: WebsiteNavigationService) {}

  ngOnInit() {}

}
