import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TasksServiceService} from '../../services/tasks-service.service';

@Component({
  selector: 'app-new-list-popover',
  templateUrl: './new-list-popover.component.html',
  styleUrls: ['./new-list-popover.component.scss'],
})
export class NewListPopoverComponent implements OnInit {
  // @Input() lists: Array<any>;
  newListName = '';
  constructor(public popoverController: PopoverController,
              public tasksService: TasksServiceService) { }

  ngOnInit() {}
  addNewListName(newList){
    this.tasksService.addNewList(newList);
    this.popoverController.dismiss();
  }
  cancel(){
    this.popoverController.dismiss();
  }
}
