import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
@Input()
categories: string[];
taskName: string;
isImportant = false;

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

    toggleIsImportant(){
      this.isImportant = !this.isImportant;
    }

    submit(){
      this.modalController.dismiss({taskName: this.taskName, isImportant: this.isImportant});
    }

}
