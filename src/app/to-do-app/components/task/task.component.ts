import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
    @Input()
    task: Task;

    @Output() isCheckedChanged = new EventEmitter<any>();
viewportWidth = window.innerWidth;
  constructor() { }

  ngOnInit() {}
    toggleImportance(){

    }
    handleChecked(event){
      this.isCheckedChanged.emit(event);
    }
}
