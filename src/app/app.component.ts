import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewportService } from './shared/services/viewport.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isMobileView$: Observable<boolean>;
  currentPath: string = '';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    public breakpointObserver: BreakpointObserver,
    private viewportService: ViewportService,
    private router: Router
  ) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu.svg')
    );
    this.isMobileView$ = this.viewportService.mobileView;
  }
  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.viewportService.mobileView.next(false);
        } else {
          this.viewportService.mobileView.next(true);
        }
      });
    this.router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.currentPath = route.url;
      }
    });
  }
}
