import { TodoController } from "./todoController";
// Based on the explain that you give me about todoController, todoModel and todoView, what do you think that the following code will do?
// It will create a new todo controller, add two todos, display them, remove the second todo and display the remaining todo.
// It will then display the remaining todo.
const controller = new TodoController();
controller.aT("Buy milk");
controller.aT("Walk the dog");
// controller.displayTodos();
controller.rT(1);
// controller.displayTodos();
