import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { filterTodosByDate } from "./utils/date.utils";

export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  public addTodo(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  public removeTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
      this.view.displayTodos(this.todos);
    }
  }

  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    if (todo) {
      todo.completed = !todo.completed;
      this.view.displayTodos(this.todos);
    }
  }

  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    if (todo) {
      todo.title = title;
      this.view.displayTodos(this.todos);
    }
  }

  public filterTodosByCreationDay() {
    return filterTodosByDate(this.todos, new Date());
  }
}
