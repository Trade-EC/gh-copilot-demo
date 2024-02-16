// FILEPATH: /home/alan7a/Documents/Trade/Capacitaciones/gh-copilot-demo/test/todoController.test.ts
import { TodoController } from "../src/todoController";
import { TodoModel } from "../src/todoModel";
import { TodoView } from "../src/todoView";

jest.mock("../src/todoView");

describe("TodoController", () => {
  let todoController: TodoController;
  let todoView: jest.Mocked<TodoView>;

  beforeEach(() => {
    todoView = new TodoView() as jest.Mocked<TodoView>;
    todoController = new TodoController();
    (todoController as any).view = todoView;
  });

  it("should add a todo item", () => {
    todoController.addTodoItem("Test todo");
    expect(todoView.displayTodos).toHaveBeenCalledWith([expect.any(TodoModel)]);
  });

  it("should remove a todo item", () => {
    todoController.addTodoItem("Test todo");
    todoController.removeTodoItem(0);
    expect(todoView.displayTodos).toHaveBeenCalledWith([]);
  });

  it("should toggle a todo item", () => {
    todoController.addTodoItem("Test todo");
    todoController.toggleTodoItem(0);
    expect(todoView.displayTodos).toHaveBeenCalledWith([
      expect.objectContaining({ completed: true }),
    ]);
  });

  it("should update a todo item title", () => {
    todoController.addTodoItem("Test todo");
    todoController.updateTodoTitle(0, "Updated title");
    expect(todoView.displayTodos).toHaveBeenCalledWith([
      expect.objectContaining({ title: "Updated title" }),
    ]);
  });

  // You'll need to implement a mock for the `auxDate` function and the expected behavior of `filterTodosByCreationDay`.
  // it('should filter todos by creation day', () => {
  //   // Test implementation here
  // });
});
