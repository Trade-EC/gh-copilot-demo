import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { filterTodosByCurrentDate } from "./utils/date.utils";

/**
 * Controller for managing todos.
 */
export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  /**
   * Adds a new todo.
   * @param {string} title - The title of the todo.
   */
  public addTodo(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos, "Todo Added");
  }

  /**
   * Removes a todo by its index.
   * @param {number} index - The index of the todo to remove.
   */
  public removeTodo(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.view.displayTodos(this.todos, "Todo Removed");
  }

  /**
   * Toggles the completion status of a todo by its index.
   * @param {number} index - The index of the todo to toggle.
   */
  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos, "Todo Toggled");
  }

  /**
   * Updates the title of a todo by its index.
   * @param {number} index - The index of the todo to update.
   * @param {string} title - The new title for the todo.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos, "Todo Title Updated");
  }

  /**
   * Filters the todos by their creation day.
   */
  public filterTodosByCreationDay() {
    return filterTodosByCurrentDate(this.todos);
  }

  // Other methods...
  public getTodosCount(): number {
    return this.todos.length;
  }

  public getTodoAtIndex(index: number): TodoModel {
    return this.todos[index];
  }
}
