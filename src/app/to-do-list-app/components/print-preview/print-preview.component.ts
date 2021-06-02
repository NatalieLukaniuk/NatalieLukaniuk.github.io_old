import {Component, Input, OnInit} from '@angular/core';
import {TasksServiceService} from '../../services/tasks-service.service';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss'],
})
export class PrintPreviewComponent implements OnInit {
@Input() printAllLists: boolean;
  constructor(public tasksService: TasksServiceService,
              public modalController: ModalController) { }

  ngOnInit() {console.log(this.printAllLists); }

  close(){
    this.modalController.dismiss().then(r => console.log('wtf'));
  }
}
