import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  public aT(title: string): void {
    const newTodo = new TodoModel(title, false);
    console.log("Adding a new todo item", newTodo.title);
    this.todos.push(newTodo);
  }

  public rT(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        console.log(
          "Removing the todo item at index",
          `${index} ${this.todos[i].title}`
        );
        this.todos.splice(i, 1);
        break;
      }
    }
  }

  /**
   * Displays the todos by calling the view's displayTodos method.
   */
  public displayTodos(): void {
    this.view.displayTodos(this.todos);
  }

  /**
   * Toggles the completion status of a todo item at the specified index.
   * @param index - The index of the todo item to toggle.
   */
  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    console.log(
      "Changing the completion status of the todo item at index",
      `${index} ${todo.title}`
    );
  }

  /**
   * Updates the title of a todo item at the specified index.
   * @param index - The index of the todo item.
   * @param title - The new title for the todo item.
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    console.log(
      "Updating the title of the todo item at index",
      `${index} ${todo.title}`
    );
  }

  public filterTodosByCreationDay() {
    return auxDate(this.todos, new Date());
  }
}
