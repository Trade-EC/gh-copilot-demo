// FILEPATH: /C:/Users/ghalc/Documents/Trade/Caps/gh-copilot-demo/test/todoController.test.ts

import test, { describe, beforeEach } from "node:test";
import { expect } from "expect";
import { TodoController } from "../todoController";

describe("TodoController", () => {
  let controller: TodoController;

  beforeEach(() => {
    controller = new TodoController();
  });

  test("should add tasks correctly", () => {
    controller.aT("Buy milk");
    controller.aT("Walk the dog");

    expect(controller.getTodos().length).toBe(2);
    expect(controller.getTodos()[0].title).toBe("Buy milk");
    expect(controller.getTodos()[1].title).toBe("Walk the dog");
  });

  test("should remove tasks correctly", () => {
    controller.aT("Buy milk");
    controller.aT("Walk the dog");
    controller.rT(1);

    expect(controller.getTodos().length).toBe(1);
    expect(controller.getTodos()[0].title).toBe("Buy milk");
  });

  test("should mark tasks as completed correctly", () => {
    controller.aT("Buy milk");
    controller.aT("Walk the dog");
    controller.completeTodo(0);

    expect(controller.getTodos()[0].completed).toBe(true);
    expect(controller.getTodos()[1].completed).toBe(false);
  });

  test("should get completed tasks correctly", () => {
    controller.aT("Buy milk");
    controller.aT("Walk the dog");
    controller.completeTodo(0);

    const completedTodos = controller.getCompletedTodos();

    expect(completedTodos.length).toBe(1);
    expect(completedTodos[0].title).toBe("Buy milk");
    expect(completedTodos[0].completed).toBe(true);
  });
});
