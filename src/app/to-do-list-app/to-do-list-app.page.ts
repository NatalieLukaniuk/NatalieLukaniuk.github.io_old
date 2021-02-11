import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import {NewListPopoverComponent} from '../components/new-list-popover/new-list-popover.component';

@Component({
  selector: 'app-to-do-list-app',
  templateUrl: './to-do-list-app.page.html',
  styleUrls: ['./to-do-list-app.page.scss'],
})
export class ToDoListAppPage implements OnInit {

  lists = [
    {name: 'Today', tasks: [{taskName: 'do laundry', priority: 'high'}, {taskName: 'do laundry', priority: 'high'}, {taskName: 'wash dishes', priority: 'default'}, {taskName: 'wash dishes', priority: 'low'}]},
    {name: 'Long-term', tasks: []},
    {name: 'Can wait', tasks: []},
  ];
  newTask = '';
  selectedList = ['Today'];
  selectedPriority = 'default';
  listToDisplay = 'Today';
  private ev: Event;
  popoverIsOn = false;

  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
  }

  async openCreateNewListPopover() {
    this.popoverIsOn = true;
    console.log(this.popoverIsOn);
    const popover = await this.popoverController.create({
      component: NewListPopoverComponent,
      cssClass: 'new-list-popover',
      event: this.ev,
      translucent: true,
      componentProps: {
        lists: this.lists,
        popooverIsOn: this.popoverIsOn,
      },
    });

    popover.onDidDismiss().then(() => {
      this.popoverIsOn = false;
      console.log(this.popoverIsOn);
    });

    return await popover.present();
  }

  onChange(event, selected){
    switch(selected){
      case 'list': this.selectedList = event.target.value;
        break;
      case 'priority': this.selectedPriority = event.target.value;
    }
  }

  addNewTask(newTask){
    for (let i = 0; i < this.selectedList.length; i++){
      for(let n = 0; n < this.lists.length; n++){
        if(this.lists[n].name === this.selectedList[i]) {
          this.lists[n].tasks.push({taskName: newTask, priority: this.selectedPriority});
          console.log(this.lists[n].tasks);
        }
      }
    }
  }

  deleteTask(i, task){
    this.lists[i].tasks.splice(this.lists[i].tasks.indexOf(task), 1);
  }

  clearList(i){
    this.lists[i].tasks.splice(0);
  }

}
