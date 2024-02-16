import { TodoController } from './todoController';

/**
 * Represents the controller for managing todos.
 */
const controller = new TodoController();

controller.aT('Buy milk');
controller.aT('Walk the dog');
// controller.displayTodos();
controller.rT(1);
// controller.displayTodos();