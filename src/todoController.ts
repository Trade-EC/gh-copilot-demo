import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

/**
 * Represents a controller for managing todo items.
 */
export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  /**
   * Creates an instance of TodoController.
   */
  constructor() {
    this.view = new TodoView();
  }

  /**
   * Adds a new todo item with the given title.
   * @param {string} title - The title of the todo item.
   */
  public addTodoItem(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a todo item at the specified index.
   * @param {number} index - The index of the todo item to remove.
   */
  public removeTodoItem(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.view.displayTodos(this.todos);
  }

  /**
   * Toggles the completion status of a todo item at the specified index.
   * @param {number} index - The index of the todo item to toggle.
   */
  public toggleTodoItem(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos);
  }

  /**
   * Updates the title of a todo item at the specified index.
   * @param {number} index - The index of the todo item to update.
   * @param {string} title - The new title for the todo item.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos);
  }

  /**
   * Filters the todo items based on their creation day.
   */
  public filterTodosByCreationDay() {
    return auxDate(this.todos, new Date());
  }
}
