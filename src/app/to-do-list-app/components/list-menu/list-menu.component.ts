import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlertController, PopoverController} from '@ionic/angular';
import {EditPopoverComponent} from '../edit-popover/edit-popover.component';
import {TasksServiceService} from '../../services/tasks-service.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss'],
})
export class ListMenuComponent implements OnInit {

@Input() currentListIndex: number;
@Input() color: string;

  constructor(public popoverController: PopoverController,
              public alertController: AlertController,
              public tasksService: TasksServiceService) { }

  ngOnInit() {
  }
  async clearList(){
    const alert = await this.alertController.create({
      cssClass: 'delete-alert',
      header: 'Do you really want to delete all tasks from this list?',
      subHeader: 'This cannot be undone',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          cssClass: 'delete-btn',
          handler: () => {
            this.tasksService.clearList(this.currentListIndex);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel-btn',
          handler: () => {
            this.alertController.dismiss();
          }
        }]
    });
    await alert.present();
    await this.popoverController.dismiss();
  }

  async editListName(){
    await this.popoverController.dismiss();
    const popover = await this.popoverController.create({
      component: EditPopoverComponent,
      cssClass: 'edit-popover',
      translucent: false,
      componentProps: {
        currentListIndex: this.currentListIndex,
        color: this.color,
      },
    });
    return await popover.present();
  }
  async deleteList(){
    const alert = await this.alertController.create({
      cssClass: 'delete-alert',
      header: 'Do you really want to delete this list?',
      subHeader: 'This cannot be undone',
      buttons: [
        {
        text: 'Delete',
        role: 'delete',
        cssClass: 'delete-btn',
        handler: () => {
          this.tasksService.deleteList(this.currentListIndex);
          this.tasksService.selectedList = '';
        }
      },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel-btn',
          handler: () => {
            this.alertController.dismiss();
          }
        }]
    });

    await alert.present();
    await this.popoverController.dismiss();
  }
}
