import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  public getTodos(): TodoModel[] {
    return this.todos;
  }

  public getView(): TodoView {
    return this.view;
  }

  constructor() {
    this.view = new TodoView();
  }

  public aT(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  public rT(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
      this.view.displayTodos(this.todos);
    } else {
      console.error("Índice fuera de rango");
    }
  } //fix :for inecesario

  public toggleTodo(index: number): void {
    if (index >= 0 && index < this.todos.length) {
      const todo = this.todos[index];
      todo.completed = !todo.completed;
      this.view.displayTodos(this.todos);
    } else {
      console.error("Índice fuera de rango");
    }
  } //Fix: Indice fuera de rango

  public updateTodoTitle(index: number, title: string): void {
    if (index >= 0 && index < this.todos.length) {
      const todo = this.todos[index];
      todo.title = title;
      this.view.displayTodos(this.todos);
    } else {
      console.error("Índice fuera de rango");
    }
  } //Fix: Indice fuera de rango

  public filterTodosByCreationDay() {
    return auxDate(this.todos);
  }
}
