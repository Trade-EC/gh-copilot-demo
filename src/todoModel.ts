// What is the purpose of this model?
// This model is used to define the structure of a todo item.
// It has a title, a completed status and a creation date.
// It is used by the TodoController class to create, remove, toggle and update todos.
// It is also used by the TodoView class to display the todos.
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
