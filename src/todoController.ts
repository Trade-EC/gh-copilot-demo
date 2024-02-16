import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { filterTodosByToday } from "./utils/date.utils";

/**
 * Represents a controller for managing todo items.
 */
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
  public addTodo(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a todo item from the todos array at the specified index.
   * @param index - The index of the todo item to be removed.
   */
  public removeTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
      this.view.displayTodos(this.todos);
    }
  }

  /**
   * Toggles the completion status of a todo item.
   *
   * @param index - The index of the todo item to toggle.
   */
  public toggleTodoCompletion(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      const todo = this.todos[index];
      todo.completed = !todo.completed;
      this.view.displayTodos(this.todos);
    }
  }

  /**
   * Updates the title of a todo item at the specified index.
   * @param index - The index of the todo item to update.
   * @param title - The new title for the todo item.
   * @throws {Error} If the index is invalid.
   */
  public updateTodoTitle(index: number, title: string): void {
    if (index >= 0 && index < this.todos.length) {
      const todo = this.todos[index];
      todo.title = title;
      this.view.displayTodos(this.todos);
    } else {
      throw new Error("Invalid index");
    }
  }

  /**
   * Filters the todos array to get todos created today.
   * @returns {TodoModel[]} - The todos created today.
   */
  public filterTodosByCreationDay(): TodoModel[] {
    return filterTodosByToday(this.todos);
  }

  /**
   * Displays all todos stored in the todos array.
   * @returns {void}
   */
  public displayTodos(): void {
    this.view.displayTodos(this.todos);
  }
}
