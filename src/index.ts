// Importa la clase TodoController desde el archivo 'todoController.ts'
import { TodoController } from "./todoController";

// Crea una nueva instancia de la clase TodoController
const controller = new TodoController();

// Llama al método 'aT' (agregar tarea) de la instancia de TodoController para agregar la tarea 'Buy milk'
controller.aT("Buy milk");

// Llama al método 'aT' (agregar tarea) de la instancia de TodoController para agregar la tarea 'Walk the dog'
controller.aT("Walk the dog");

// Llama al método 'rT' (remover tarea) de la instancia de TodoController para remover la tarea en el índice 1 (la segunda tarea, ya que los índices comienzan en 0)
controller.rT(1);
