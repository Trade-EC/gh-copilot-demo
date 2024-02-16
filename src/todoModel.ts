/**
 * Represents a todo item.
 */
export class TodoModel {
    /**
     * The title of the todo item.
     */
    title: string;
    /**
     * Indicates whether the todo item is completed or not.
     */
    completed: boolean;
    /**
     * The creation date of the todo item.
     */
    creationDate: Date;

    /**
     * Creates a new instance of the TodoModel class.
     * @param title - The title of the todo item.
     * @param completed - Indicates whether the todo item is completed or not. Default is false.
     */
    constructor(title: string, completed: boolean = false) {
        this.title = title;
        this.completed = completed;
        this.creationDate = new Date();
    }
}