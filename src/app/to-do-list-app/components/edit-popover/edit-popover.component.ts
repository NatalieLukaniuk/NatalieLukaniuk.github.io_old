import {Component, Input, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {TasksServiceService} from '../../services/tasks-service.service';


@Component({
  selector: 'app-edit-popover',
  templateUrl: './edit-popover.component.html',
  styleUrls: ['./edit-popover.component.scss'],
})
export class EditPopoverComponent implements OnInit {
@Input() currentListIndex: any;
  newName = '';
@Input() color: string;
  constructor(public popoverController: PopoverController,
              public tasksService: TasksServiceService) { }

  ngOnInit() {
  }
  changeListName(newName){
    this.tasksService.changeListName(newName, this.currentListIndex);
    this.popoverController.dismiss();
    this.tasksService.selectedList = newName;
  }
  cancel(){
    this.popoverController.dismiss();
  }
}
