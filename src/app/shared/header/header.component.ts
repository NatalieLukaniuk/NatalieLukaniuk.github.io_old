import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ViewportService } from '../services/viewport.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMobileView$: Observable<boolean>;

  constructor(private viewportService: ViewportService) {
    this.isMobileView$ = this.viewportService.mobileView;
  }

  ngOnInit(): void {}
}
