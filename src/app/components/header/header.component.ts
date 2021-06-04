import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {WebsiteNavigationService} from '../../services/website-navigation.service';
import {PopoverController} from '@ionic/angular';
import {SubmenuPopoverComponent} from './submenu-popover/submenu-popover.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() color: any;
  @Input() useContainer: boolean;
  @Input() printable: boolean;
  viewportWidth = window.innerWidth;
headerColor: string;
  constructor(private router: Router,
              public nav: WebsiteNavigationService,
              public popoverController: PopoverController) { }

  ngOnInit() {
      this.headerColor = this.color;
  }
  goTo(url){
  this.router.navigate([url]);
}
  async openSubmenu(button, ev){
    const popover = await this.popoverController.create({
      component: SubmenuPopoverComponent,
      cssClass: 'submenu-popover',
      event: ev,
      translucent: true,
      showBackdrop: false,
      componentProps: {
        children: button.children,
      },
    });
    return await popover.present();
  }
}
