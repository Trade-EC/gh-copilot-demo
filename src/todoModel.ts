export class TodoModel {
  title: string;
  completed: boolean;
  creationDate: Date;

  /**
   * Represents a Todo item.
   * @param title - The title of the Todo item.
   * @param completed - Indicates whether the Todo item is completed or not. Default is false.
   */
  constructor(title: string, completed: boolean = false) {
    this.title = title;
    this.completed = completed;
    this.creationDate = new Date();
  }
}
