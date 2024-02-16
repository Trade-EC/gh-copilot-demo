import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

/**
 * Clase para manejar las operaciones de los "todos".
 */
export class TodoController {
  private todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  /**
   * Agrega un nuevo "todo".
   * @param title El título del "todo".
   */
  public addTodo(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
  }

  /**
   * Elimina un "todo".
   * @param index El índice del "todo" a eliminar.
   */
  public removeTodo(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
  }

  public toggleTodo(index: number): void {
    const todo = this.todos[index];
    todo.completed = !todo.completed;
  }

  /**
   * Actualiza un "todo".
   * @param index El índice del "todo" a actualizar.
   * @param title El nuevo título del "todo".
   */
  public updateTodoTitle(index: number, title: string): void {
    const todo = this.todos[index];
    todo.title = title;
  }

  public filterTodosByCreationDay() {
    return auxDate(this.todos, new Date());
  }

  /**
   * Muestra todos los "todos" en la consola.
   */
  public displayTodos(): void {
    this.view.displayTodos(this.todos);
  }
}
