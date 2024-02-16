export class TodoModel {
    title: string;
    completed: boolean;
    createdAt: Date;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
        this.createdAt = new Date();
    }
}