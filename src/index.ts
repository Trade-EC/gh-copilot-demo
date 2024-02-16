import { TodoController } from "./todoController";

const controller = new TodoController();

controller.addTodoItem("Buy milk");
controller.addTodoItem("Walk the dog");
controller.removeTodoItem(1);
controller.filterTodosByCreationDay();
