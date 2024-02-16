import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

/**
 * Represents a TodoController that manages a list of todos.
 */
export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  /**
   * Adds a new todo with the specified title to the list of todos.
   * @param title - The title of the new todo.
   */
  public aT(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a todo at the specified index from the list of todos.
   * @param index - The index of the todo to remove.
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

  /**
   * Toggles the completion status of a todo at the specified index.
   * @param index - The index of the todo to toggle.
   */
  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos);
  }

  /**
   * Updates the title of a todo at the specified index.
   * @param index - The index of the todo to update.
   * @param title - The new title for the todo.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos);
  }

  /**
   * Filters the todos by their creation day.
   * @returns An array of todos created on the current day.
   */
  public filterTodosByCreationDay(): TodoModel[] {
    const result = auxDate(this.todos, new Date());
    if (Array.isArray(result)) {
      return result;
    } else {
      return [];
    }
  }
}
