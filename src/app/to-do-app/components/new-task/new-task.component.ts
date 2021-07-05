import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Task} from '../../models/task.interface';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
@Input()
categories: string[];
@ViewChild('form', {static: false})
form: any;
@ViewChild('taskName', {static: false})
taskNm: any;
// task: Task;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
      console.log(this.form);
  }

    toggleIsImportant(){
      this.form.value.isImportant = !this.form.value.isImportant;
    }

    check(){
      console.log(this.taskNm);
    }

    submit(){
      this.modalController.dismiss(this.form.value);
    }

}
