import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {NewListPopoverComponent} from './components/new-list-popover/new-list-popover.component';
import {ListMenuComponent} from './components/list-menu/list-menu.component';
import {TasksServiceService} from './services/tasks-service.service';
import {PrintSettingsComponent} from './components/print-settings/print-settings.component';

@Component({
  selector: 'app-to-do-list-app',
  templateUrl: './to-do-list-app.page.html',
  styleUrls: ['./to-do-list-app.page.scss'],
})
export class ToDoListAppPage implements OnInit {
  viewportWidth = window.innerWidth;
  // listToDisplay = '';
  private ev: Event;
  color = 'tertiary';
  listSelectionOptions: any = {
    showBackdrop: false,
    cssClass: 'single-selection-popover',
  };


  constructor(public popoverController: PopoverController,
              public tasksService: TasksServiceService) { }

  ngOnInit() {}

  async openCreateNewListPopover() {
    const popover = await this.popoverController.create({
      component: NewListPopoverComponent,
      cssClass: 'new-list-popover',
      event: this.ev,
      translucent: true,
    });
    return await popover.present();
  }

  async openListMenu(ev: any, i){
    const popover = await this.popoverController.create({
      component: ListMenuComponent,
      cssClass: 'list-menu-popover',
      event: ev,
      translucent: false,
      showBackdrop: false,
      componentProps: {
        currentListIndex: i,
        color: this.color,
      },
    });
    return await popover.present();
    const { data } = await popover.onDidDismiss();
    console.log(data);
  }

  async openPrintSettings(){
    const popover = await this.popoverController.create({
      component: PrintSettingsComponent,
      cssClass: 'print-settings-popover',
      translucent: false,
      showBackdrop: false,
      componentProps: {

      },
    });
    return await popover.present();
  }
}
