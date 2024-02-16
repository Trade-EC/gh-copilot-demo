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
   * Updates the title of the todo item at the specified index.
   * @param index - The index of the todo item to update.
   * @param title - The new title for the todo item.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos);
  }

  /**
   * Filters the todo items by their creation day.
   * @returns An array of todo items filtered by creation day.
   */
  public filterTodosByCreationDay() {
    return auxDate(this.todos);
  }

  /**
   * Marks the todo item at the specified index as completed.
   * @param index - The index of the todo item to mark as completed.
   */
  public completeTodo(index: number): void {
    const todo = this.todos[index];
    if (todo) {
      todo.completed = true;
      this.view.displayTodos(this.todos);
    } else {
      console.log(`No todo item found at index ${index}`);
    }
  }

  /**
   * Returns an array of completed todos.
   * @returns {TodoModel[]} The array of completed todos.
   */
  public getCompletedTodos(): TodoModel[] {
    return this.todos.filter((todo) => todo.completed);
  }

  /**
   * Returns the todos array.
   * @returns {TodoModel[]} The todos array.
   */
  public getTodos(): TodoModel[] {
    return this.todos;
  }
}
