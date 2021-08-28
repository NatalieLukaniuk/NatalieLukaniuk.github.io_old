import { Task } from './task.interface';

export interface List {
    password?: string;
    isPrivate: boolean;
    list: Task[];
}
