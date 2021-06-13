import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  lists = [
    {name: 'Today',
      highPriorityTasks: [],
      regularPriorityTasks: [],
      lowPriorityTasks: [],
    isChecked: false},
    {name: 'Long-term', highPriorityTasks: [], lowPriorityTasks: [], regularPriorityTasks: [], isChecked: false},
    {name: 'Can wait', highPriorityTasks: [], lowPriorityTasks: [], regularPriorityTasks: [], isChecked: false},
  ];

  selectedList = '';

  constructor() { }

  deleteTask(task, listIndex, priority){
    switch (priority) {
      case 'high': this.lists[listIndex].highPriorityTasks.splice(this.lists[listIndex].highPriorityTasks.indexOf(task), 1);
                   break;
      case 'default': this.lists[listIndex].regularPriorityTasks.splice(this.lists[listIndex].regularPriorityTasks.indexOf(task), 1);
                      break;
      case 'low': this.lists[listIndex].lowPriorityTasks.splice(this.lists[listIndex].lowPriorityTasks.indexOf(task), 1);
    }
  }

  clearList(listIndex){
    this.lists[listIndex].highPriorityTasks.splice(0);
    this.lists[listIndex].regularPriorityTasks.splice(0);
    this.lists[listIndex].lowPriorityTasks.splice(0);
  }

  addNewTask(newTask, selectedLists, selectedPriority){
    for (let i = 0; i < selectedLists.length; i++){
      for (let n = 0; n < this.lists.length; n++){
        if (this.lists[n].name === selectedLists[i]){

          switch (selectedPriority) {
            case 'high': this.lists[n].highPriorityTasks.push({taskName: newTask});
                         break;
            case 'default': this.lists[n].regularPriorityTasks.push({taskName: newTask});
                            break;
            case 'low': this.lists[n].lowPriorityTasks.push({taskName: newTask});
          }
        }
      }
    }
  }


  deleteList(listIndex){
    this.lists.splice(listIndex, 1);
  }

  changeListName(newName, currentListIndex){
    this.lists[currentListIndex].name = newName;
  }

  addNewList(listName){
    this.lists.push({name: listName, regularPriorityTasks: [], lowPriorityTasks: [], highPriorityTasks: [], isChecked: false});
  }
}
