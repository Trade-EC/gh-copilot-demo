import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  /**
   * Creates a new instance of the TodoController class.
   */
  constructor() {
    this.view = new TodoView();
  }

  /**
   * Adds a new todo item to the list.
   * @param {string} title - The title of the todo item.
   */
  public addTodo(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.displayTodos();
  }

  /**
   * Displays the todos by calling the view's displayTodos method.
   */
  public displayTodos(): void {
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a todo item from the todos array at the specified index.
   * @param index - The index of the todo item to be removed.
   */
  public removeTodo(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.displayTodos();
  }

  /**
   * Toggles the completion status of a todo item at the specified index.
   * @param index - The index of the todo item to toggle.
   */
  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
  }

  /**
   * Updates the title of a todo item at the specified index.
   * @param index - The index of the todo item to update.
   * @param title - The new title for the todo item.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.displayTodos();
  }

  /**
   * Filters the todos by creation day.
   * @returns {Array<Todo>} The filtered todos.
   */
  public filterTodosByCreationDay() {
    return auxDate(this.todos);
  }
}
