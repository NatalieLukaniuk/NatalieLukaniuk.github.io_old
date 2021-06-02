import { Component, OnInit, Input } from '@angular/core';
import {TasksServiceService} from '../../services/tasks-service.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss'],
})
export class TaskAddComponent implements OnInit {
  newTask = '';
  selectedList = ['Today'];
  selectedPriority = 'default';

  selectionOptions: any = {
    showBackdrop: false,
    cssClass: 'task-add-selection-alert',
  };
  // @Input() lists: Array<any>;
  @Input() color: string;
  // @Input() newAddedTask: object;
  constructor(public tasksService: TasksServiceService) { }

  ngOnInit() {
    console.log(this.tasksService.lists);
  }
  onChange(event, selected){
    switch (selected){
      case 'list': this.selectedList = event.target.value;
                   break;
      case 'priority': this.selectedPriority = event.target.value;
    }
  }
  addNewTask(newTask, selectedList, selectedPriority){
    this.tasksService.addNewTask(newTask, selectedList, selectedPriority);
  }
}
