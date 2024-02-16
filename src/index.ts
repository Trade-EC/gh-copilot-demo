import { TodoController } from "./todoController";

const controller = new TodoController();

controller.addTodo("Buy milk");
controller.addTodo("Walk the dog");
controller.displayTodos();
controller.addTodo("1"); // Fix: Change the argument to a string
controller.displayTodos();
