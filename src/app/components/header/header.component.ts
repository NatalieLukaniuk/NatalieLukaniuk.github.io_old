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
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.color);
  }

}
