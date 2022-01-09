import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ViewportService } from '../shared/services/viewport.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  isMobileView$: Observable<boolean>;
  constructor(private viewportService: ViewportService) {
    this.isMobileView$ = this.viewportService.mobileView;
  }

  ngOnInit(): void {}
}
