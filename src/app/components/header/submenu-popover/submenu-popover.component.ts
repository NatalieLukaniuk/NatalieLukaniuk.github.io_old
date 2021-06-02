import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-submenu-popover',
  templateUrl: './submenu-popover.component.html',
  styleUrls: ['./submenu-popover.component.scss'],
})
export class SubmenuPopoverComponent implements OnInit {
@Input() children: Array<any>;
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss();
  }
}
