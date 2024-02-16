export class TodoModel {
    title: string;
    completed: boolean;
    creationDate: Date;

    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
        this.creationDate = new Date();
    }
}