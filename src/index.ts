import { TodoController } from "./todoController";
import { TodoView } from "./todoView";

const controller = new TodoController();

controller.aT("Track time");

controller.aT("Take a break");

controller.toggleTodo(0);
controller.toggleTodo(1);

controller.aT("Generate apk for Kiosco");
controller.updateTodoTitle(2, "Generate expo-dev-client for Kiosco");

controller.aT("Move task on Hubstaff");
controller.rT(3);

controller.displayTodos();
