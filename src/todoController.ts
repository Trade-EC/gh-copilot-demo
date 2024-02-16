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
   * Adds a new task to the todo list.
   * @param title - The title of the task.
   */
  public displayTodos(): void {
    this.view.displayTodos(this.todos);
  }

  /**
   * Adds a new task to the todo list.
   * @param title - The title of the task.
   */
  public addTask(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a task from the todo list.
   * @param index - The index of the task to remove.
   */
  public removeTask(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.view.displayTodos(this.todos);
  }

  /**
   * Toggles the completion status of a task.
   * @param index - The index of the task to toggle.
   */
  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos);
  }

  /**
   * Updates the title of a task.
   * @param index - The index of the task to update.
   * @param title - The new title for the task.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos);
  }

  /**
   * Filters the todos based on the creation day.
   * @returns An array of todos created on the current day.
   */
  public filterTodosByCreationDay(): TodoModel[] | string | undefined{
    // Adjust the call to auxDate according to its definition
    return auxDate(this.todos);
  }
}
