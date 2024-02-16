import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

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
   * Displays the todos.
   */
  public displayTodos(): void {
    this.view.displayTodos(this.todos);
  }

  /**
   * Adds a new todo item with the specified title.
   * @param title - The title of the todo item.
   */
  public aT(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes the todo item at the specified index.
   * @param index - The index of the todo item to remove.
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
   * Toggles the completion status of the todo item at the specified index.
   * @param index - The index of the todo item to toggle.
   */
  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos);
  }

  /**
   * Filters the todos by the creation day.
   * @param date - The creation day to filter by.
   * @returns An array of filtered TodoModel objects, or a string if there was an error, or undefined if no todos match the given date.
   */
  public filterTodosByCreationDay(
    date: Date
  ): TodoModel[] | string | undefined {
    return auxDate(this.todos, date);
  }
}
