import { TodoController } from "./todoController";

const controller = new TodoController();

controller.addTodo("Buy milk");
controller.addTodo("Walk the dog");
controller.displayTodos();
controller.removeTodo(1);
controller.displayTodos();
