import { TodoController } from "./todoController";

const controller = new TodoController();

controller.aT("Buy milk");
controller.aT("Walk the dog");
// controller.displayTodos();
// controller.rT(1);
// controller.displayTodos();
controller.toggleTodo(1);
controller.updateTodoTitle(1, "Walk the cat");
controller.filterTodosByCreationDay();
