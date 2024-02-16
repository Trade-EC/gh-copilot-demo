export class TodoModel {
  title: string;
  completed: boolean;
  creationDate: Date;

  /**
   * Creates a new TodoModel instance.
   * @param title - The title of the todo.
   * @param completed - Indicates whether the todo is completed or not. Default is false.
   */
  constructor(title: string, completed: boolean = false) {
    this.title = title;
    this.completed = completed;
    this.creationDate = new Date();
  }
}
