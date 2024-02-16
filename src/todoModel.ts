/**
 * Represents a todo item.
 */
export class TodoModel {
  title: string;
  completed: boolean;
  creationDate: Date;

  /**
   * Creates a new todo item.
   * @param {string} title - The title of the todo.
   * @param {boolean} completed - The completion status of the todo. Defaults to false.
   */
  constructor(title: string, completed: boolean = false) {
    this.title = title;
    this.completed = completed;
    this.creationDate = new Date();
  }
}
