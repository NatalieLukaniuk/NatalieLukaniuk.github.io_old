export interface Task {
    name: string;
    dueDate: string | null;
    isImportant: boolean;
    isCompleted: boolean;
    categories: string[];
    isChecked: boolean;
}
