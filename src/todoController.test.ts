import { TodoController } from "./todoController";
import { TodoModel } from "./todoModel";

describe("TodoController", () => {
  let controller: TodoController;

  beforeEach(() => {
    controller = new TodoController();
  });

  test("addTodo adds a todo", () => {
    controller.addTodo("Test Todo");
    expect(controller.getTodosCount()).toBe(1);
    expect(controller.getTodoAtIndex(0)).toBeInstanceOf(TodoModel);
    expect(controller.getTodoAtIndex(0).title).toBe("Test Todo");
  });

  test("removeTodo removes a todo", () => {
    controller.addTodo("Test Todo");
    controller.removeTodo(0);
    expect(controller.getTodosCount()).toBe(0);
  });
});
