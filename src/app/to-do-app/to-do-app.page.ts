import {Component, OnChanges, OnInit } from '@angular/core';
import {Task} from './models/task.interface';
import {TasksService} from './services/tasks.service';
import {ModalController, PopoverController} from '@ionic/angular';
import {MenuComponent} from './components/menu/menu.component';
import {NewTaskComponent} from './components/new-task/new-task.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

@Component({
    selector: 'app-to-do-app',
    templateUrl: './to-do-app.page.html',
    styleUrls: ['./to-do-app.page.scss'],
})
export class ToDoAppPage implements OnInit, OnChanges {
    color = 'secondary';
    allTasks: Task[];
    selectedTasks: Task[] = [];
    tasksToDisplay: Task[];
    currentTab = 'Tasks to complete';
    categories: string[];
    viewportWidth = window.innerWidth;

    constructor(private tasksService: TasksService,
                public popoverController: PopoverController,
                public modalController: ModalController) {
    }

    ngOnChanges(){
        this.getCategories();
        console.log('ngonchanges');
    }

  ngOnInit() {
      this.allTasks = this.tasksService.mockTasks;
      this.tasksToDisplay = this.allTasks.filter(task => !task.isCompleted);
      this.getCategories();
  }
    getCategories(){
      this.categories = [];
      for (const task of this.allTasks){
          if (!task.isCompleted){
              for (const tag of task.categories){
                  if (!this.categories.includes(tag)){
                      this.categories.push(tag);
                  }
              }
          }
      }
    }

    async openMenu(ev: any){
        this.getSelectedTasks();
        const popover = await this.popoverController.create({
            component: MenuComponent,
            cssClass: 'to-do-app-menu-popover',
            event: ev,
            componentProps: {
                currentTab: this.currentTab,
                selectedTasks: this.selectedTasks
            },
            translucent: true,
        });

        popover.onDidDismiss()
            .then(data => this.handleMenuAction(data));

        return await popover.present();
    }

    handleMenuAction(data){
        if (!data.data) {
            console.log(data);
            return;
        } else {
            const prop = data.data.target.id;
            if (prop === 'markNotImportant'){
                for (const task of this.selectedTasks){
                    const i = this.allTasks.indexOf(task);
                    this.allTasks[i].isImportant = false;
                }
            } else if (prop === 'markImportant'){
                for (const task of this.selectedTasks){
                    const i = this.allTasks.indexOf(task);
                    this.allTasks[i].isImportant = true;
                }
            } else if (prop === 'markCompleted'){
                for (const task of this.selectedTasks){
                    const i = this.allTasks.indexOf(task);
                    this.allTasks[i].isCompleted = true;
                }
            } else if (prop === 'setDueDate' || prop === 'changeDueDate'){
                console.log('change date');
            } else {
                for (const task of this.selectedTasks){
                    const i = this.allTasks.indexOf(task);
                    const categoryIndex = this.allTasks[i].categories.indexOf(prop);
                    this.allTasks[i].categories.splice(categoryIndex, 1);
                }
            }
        }

        this.selectedTasks = [];
        this.updateTasksToDisplay(this.currentTab);
    }

    handleTabChange(event){
      this.currentTab = event;
      this.updateTasksToDisplay(event);
    }

    showTasksWithDueDate(){
      this.tasksToDisplay = this.allTasks.filter(task => task.dueDate && !task.isCompleted);
    }

    showTasksWithCategory(category){
        this.tasksToDisplay = this.allTasks.filter(task => task.categories.includes(category) && !task.isCompleted);
    }

    showTasksWithProp(prop){
      if (prop === 'Important') {
          this.tasksToDisplay = this.allTasks.filter(task => task.isImportant && !task.isCompleted);
      } else if (prop === 'Completed'){
          this.tasksToDisplay = this.allTasks.filter(task => task.isCompleted);
      } else if (prop === 'Tasks to complete') {
          this.tasksToDisplay = this.allTasks.filter(task => !task.isCompleted);
      }
    }

    updateTasksToDisplay(prop){
        this.resetIsChecked();
        if (prop === 'All tasks') {
          this.tasksToDisplay = this.allTasks;
      } else if (prop === 'With due date') {
          this.showTasksWithDueDate();
      } else if (prop === 'Important' || prop === 'Completed' || prop === 'Tasks to complete') {
          this.showTasksWithProp(prop);
      } else {
          this.showTasksWithCategory(prop);
      }
        console.log(this.tasksToDisplay);
    }

    resetIsChecked(){
        this.allTasks.forEach((task) => task.isChecked = false);
    }

    async addTask(){
        const modal = await this.modalController.create({
            component: NewTaskComponent,
            cssClass: 'to-do-app-new-task-modal',
            componentProps: {
                categories: this.categories,
            },
        });

        modal.onDidDismiss()
            .then(data => this.handleAddNewTask(data));

        return await modal.present();
    }

    handleAddNewTask(data){
        console.log(data.data);
        this.allTasks.push({
            name: data.data.taskName,
            isImportant: data.data.isImportant,
            isCompleted: false,
            isChecked: false,
            categories: [],
            dueDate: null
        });
        this.updateTasksToDisplay(this.currentTab);
    }

    async openDashboard(){
        const modal = await this.modalController.create({
            component: DashboardComponent,
            cssClass: 'to-do-app-dashboard-modal',
            componentProps: {
                categories: this.categories,
                currentTab: this.currentTab,
                modal: true
            },
        });

        modal.onDidDismiss()
            .then(data => this.handleDashboardAction(data));

        return await modal.present();
    }

    handleDashboardAction(data){
        this.currentTab = data.data;
        this.updateTasksToDisplay(data.data);
    }

    handleIsChecked(index, event){
        this.tasksToDisplay[index].isChecked = event;
    }

    getSelectedTasks(){
        for (const task of this.tasksToDisplay){
            if (task.isChecked){
                this.selectedTasks.push(task);
            }
        }
    }

}
