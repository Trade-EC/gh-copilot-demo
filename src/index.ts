import { TodoController } from "./todoController";

const controller = new TodoController();

controller.aT("Buy milk");
controller.aT("Walk the dog");
controller.rT(1);
controller.completeTodo(0);
controller.getCompletedTodos().forEach((todo) => console.log(todo.title));
