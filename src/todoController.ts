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
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

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
