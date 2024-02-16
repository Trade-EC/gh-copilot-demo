import { TodoController } from "../todoController";
import { TodoModel } from "../todoModel";
import { describe, expect, test, beforeEach } from "@jest/globals";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  test("aT should add a new todo", () => {
    todoController.aT("Buy milk");
    expect(todoController["todos"]).toHaveLength(1);
    expect(todoController["todos"][0].title).toBe("Buy milk");
  });

  test("rT should remove a todo by index", () => {
    todoController.aT("Buy milk");
    todoController.aT("Walk the dog");
    todoController.rT(0);
    expect(todoController["todos"]).toHaveLength(1);
    expect(todoController["todos"][0].title).toBe("Walk the dog");
  });

  test("toggleTodo should toggle the completed status of a todo", () => {
    todoController.aT("Buy milk");
    todoController.toggleTodo(0);
    expect(todoController["todos"][0].completed).toBe(true);
  });

  test("updateTodoTitle should update the title of a todo", () => {
    todoController.aT("Buy milk");
    todoController.updateTodoTitle(0, "Buy bread");
    expect(todoController["todos"][0].title).toBe("Buy bread");
  });

  test("filterTodosByCreationDay should return todos created today", () => {
    const todo = new TodoModel("Buy milk", false);
    todoController["todos"].push(todo);
    const result = todoController.filterTodosByCreationDay();
    expect(result).toEqual([todo]);
  });
});
