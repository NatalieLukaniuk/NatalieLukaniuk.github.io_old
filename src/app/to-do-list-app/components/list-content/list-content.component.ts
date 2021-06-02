import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {TasksServiceService} from '../../services/tasks-service.service';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss'],
})
export class ListContentComponent implements OnInit{
  @Input() i: number;

  constructor(public alertController: AlertController,
              public tasksService: TasksServiceService) { }

  ngOnInit() {}

  async deleteTask(task, priority){
    const alert = await this.alertController.create({
      cssClass: 'delete-alert',
      header: 'Do you really want to delete this task?',
      subHeader: 'This cannot be undone',
      buttons: [
        {
          text: 'Delete',
          role: 'delete',
          cssClass: 'delete-btn',
          handler: () => {
            this.tasksService.deleteTask(task, this.i, priority);
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
  }
}
