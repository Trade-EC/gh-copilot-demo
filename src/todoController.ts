// Importa las clases y funciones necesarias de otros archivos
import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { auxDate } from "./utils/date.utils";

// Define la clase TodoController
export class TodoController {
  // Declara una propiedad privada para almacenar la lista de tareas
  private todos: TodoModel[] = [];
  // Declara una propiedad para la vista
  private view: TodoView;

  // Define el constructor de la clase
  constructor() {
    // Inicializa la vista
    this.view = new TodoView();
  }

  // Define un método para agregar una tarea
  public aT(title: string): void {
    // Crea una nueva tarea
    const newTodo = new TodoModel(title, false);
    // Agrega la nueva tarea a la lista de tareas
    this.todos.push(newTodo);
    // Muestra la lista de tareas actualizada
    this.view.displayTodos(this.todos);
  }

  // Define un método para eliminar una tarea
  public rT(index: number): void {
    // Recorre la lista de tareas
    for (let i = 0; i < this.todos.length; i++) {
      // Si el índice actual coincide con el índice proporcionado
      if (i === index) {
        // Elimina la tarea en el índice actual
        this.todos.splice(i, 1);
        // Termina el bucle
        break;
      }
    }
    // Muestra la lista de tareas actualizada
    this.view.displayTodos(this.todos);
  }

  // Define un método para cambiar el estado de una tarea
  public toggleTodo(index: number): void {
    // Obtiene la tarea en el índice proporcionado
    const todo = this.todos[index];
    // Cambia el estado de la tarea
    todo.completed = !todo.completed;
    // Muestra la lista de tareas actualizada
    this.view.displayTodos(this.todos);
  }

  // Define un método para actualizar el título de una tarea
  public updateTodoTitle(index: number, title: string): void {
    // Obtiene la tarea en el índice proporcionado
    const todo = this.todos[index];
    // Actualiza el título de la tarea
    todo.title = title;
    // Muestra la lista de tareas actualizada
    this.view.displayTodos(this.todos);
  }

  // Define un método para filtrar las tareas por el día de creación
  public filterTodosByCreationDay() {
    // Llama a la función auxDate con la lista de tareas y la fecha actual
    return auxDate(this.todos, new Date());
  }

  // Método getter para obtener la lista de tareas
  public getTodos(): TodoModel[] {
    return this.todos;
  }
}
