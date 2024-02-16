import { TodoController } from './todoController';

const controller = new TodoController();

controller.addTask('Buy milk');
controller.addTask('Walk the dog');
// controller.displayTodos();
controller.removeTask(1);
// controller.displayTodos();