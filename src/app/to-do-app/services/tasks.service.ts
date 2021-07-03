import { Injectable } from '@angular/core';
import {Task} from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

    mockTasks: Task[] = [
        {
            name: 'Refactor code',
            dueDate: 1999999999,
            isImportant: false,
            isCompleted: false,
            isChecked: false,
            categories: ['Today', 'Sometime']
        },
        {
            name: 'Prepare design',
            dueDate: null,
            isImportant: true,
            isCompleted: true,
            isChecked: false,
            categories: ['Today', 'Tomorrow']
        },
        {
            name: 'Buy Apples',
            dueDate: null,
            isImportant: true,
            isCompleted: false,
            isChecked: false,
            categories: ['Groceries']
        },
    ];
  constructor() { }
}