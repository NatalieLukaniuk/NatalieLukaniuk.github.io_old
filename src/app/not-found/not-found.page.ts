import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
})
export class NotFoundPage implements OnInit {
color = 'tertiary';
  constructor(private router: Router) { }

  ngOnInit() {
  }
    goHome(){
      this.router.navigate(['']);
    }
}
