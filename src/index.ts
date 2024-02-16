import { TodoController } from './todoController';

const controller = new TodoController();

controller.aT('Buy milk');
controller.aT('Walk the dog');
// controller.displayTodos();
controller.rT(1);
// controller.displayTodos();
controller.readTodos(); 
// controller.filterTodosByCreationDay();
// controller.toggleTodo();
// controller.updateTodoTitle();