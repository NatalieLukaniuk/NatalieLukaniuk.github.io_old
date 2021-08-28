import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
@Input()
currentTab: string;
@Input()
selectedTasks: Array<any>;

importantTasks: Array<any> = [];
tasksWithDueDate: Array<any> = [];
today: string;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
      this.today = new Date().toISOString();
      console.log(this.today);
      this.getImportant();
      this.getTasksWithDueDate();
      console.log(this.selectedTasks);
  }

  getImportant(){
      this.importantTasks = this.selectedTasks.filter((task) => task.isImportant);
  }

  getTasksWithDueDate(){
      this.tasksWithDueDate = this.selectedTasks.filter((task) => task.dueDate);
  }

    handleClick($event){
        // console.log($event);
        this.popoverController.dismiss($event);
    }

    // TODO: for completed tab add option to mark tasks as not completed
}
