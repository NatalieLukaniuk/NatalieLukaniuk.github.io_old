import { Component, OnInit } from '@angular/core';
import {TasksServiceService} from '../../services/tasks-service.service';
import {ModalController, PopoverController} from '@ionic/angular';
import {PrintPreviewComponent} from '../print-preview/print-preview.component';

@Component({
  selector: 'app-print-settings',
  templateUrl: './print-settings.component.html',
  styleUrls: ['./print-settings.component.scss'],
})
export class PrintSettingsComponent implements OnInit {
  printAllLists = true;

  constructor(public tasksService: TasksServiceService,
              public popoverController: PopoverController,
              public modalController: ModalController) { }

  ngOnInit() { }
  close(){
    this.popoverController.dismiss();
  }
  async goPrintPreview(){
    this.popoverController.dismiss();
    const modal = await this.modalController.create({
      component: PrintPreviewComponent,
      cssClass: 'print-preview-modal',
      componentProps: {
        printAllLists: this.printAllLists,
      },
    });
    return await modal.present();
  }
}
