export interface Task {
    name: string;
    dueDate: number | null;
    isImportant: boolean;
    isCompleted: boolean;
    categories: string[];
    isChecked: boolean;
}
