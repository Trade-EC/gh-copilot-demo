import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";
import * as say from 'say';

export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  //I love the way you have organized the code, it is very easy to read and understand. <3 

  constructor() {
    this.view = new TodoView();
  }
  //This is the constructor of the class, it will create a new instance of the TodoView class.

  public aT(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }
  //The objective of this function is to add a new todo to the list of todos.

  public rT(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.view.displayTodos(this.todos);
  }
  //The objective of this function is to remove a todo from the list of todos.

  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.view.displayTodos(this.todos);
  }
  //The objective of this function is to change the status of the todo, if it is completed it will change to uncompleted and vice versa.

  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
    this.view.displayTodos(this.todos);
  }

  public readTodos(): void {
    const todosString = this.todos.map((todo, index) => `Tarea ${index + 1}: ${todo.title}`).join(', ');
    say.speak(todosString);
  } //this method is for the voice to read the todos in the console 

  public filterTodosByCreationDay() {
    return auxDate(this.todos, new Date());
  }
}
//this method will filter the todos by the day they were created, it will return the todos that were created today. 