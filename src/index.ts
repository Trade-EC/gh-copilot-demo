import { TodoController } from './todoController';

const controller = new TodoController();

controller.addTodoAndDisplay('Buy milk');
controller.addTodoAndDisplay('Walk the dog');
// controller.displayTodos();
controller.removeTodo(1);
// controller.displayTodos();