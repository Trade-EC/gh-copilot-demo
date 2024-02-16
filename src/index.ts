import { TodoController } from "./todoController";

const controller = new TodoController();

controller.addTask("Buy milk");
controller.addTask("Walk the dog");
controller.addTask("Insultar a Miguel");
controller.addTask("Putear al Cristian");
controller.addTask("Comprarle coca al David");

controller.removeTask(1);
