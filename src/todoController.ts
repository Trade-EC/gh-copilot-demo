import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  /**
   * Adds a new todo item to the list.
   * @param {string} title - The title of the todo item.
   * @returns {void}
   */
  public aT(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a todo item from the todos array at the specified index.
   * @param index - The index of the todo item to be removed.
   */
  public rT(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.view.displayTodos(this.todos);
  }

  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos);
  }

  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos);
  }

  public filterTodosByCreationDay() {
    return auxDate(this.todos, new Date());
  }
}
