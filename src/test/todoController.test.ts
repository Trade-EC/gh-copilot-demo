import { TodoController } from "../todoController";
import { TodoModel } from "../todoModel";

describe("TodoController", () => {
  let todoController: TodoController;
  let mockView: { displayTodos: jest.Mock };

  beforeEach(() => {
    mockView = { displayTodos: jest.fn() };
    todoController = new TodoController();
  });

  it("should add a new todo item with the specified title and default completion status", () => {
    todoController.aT("Test Todo");
    expect((todoController as any).todos).toHaveLength(1);
    expect((todoController as any).todos[0]).toBeInstanceOf(TodoModel);
    expect((todoController as any).todos[0].title).toBe("Test Todo");
    expect((todoController as any).todos[0].completed).toBe(false);
    expect(mockView.displayTodos).toHaveBeenCalledWith(
      (todoController as any).todos
    );
  });

  it("should remove a todo item at the specified index", () => {
    (todoController as any).todos = [
      new TodoModel("Todo 1"),
      new TodoModel("Todo 2"),
    ];
    todoController.rT(0);
    expect((todoController as any).todos).toHaveLength(1);
    expect((todoController as any).todos[0].title).toBe("Todo 2");
    expect(mockView.displayTodos).toHaveBeenCalledWith(
      (todoController as any).todos
    );
  });

  it("should not remove any todo items if the index is out of range", () => {
    (todoController as any).todos = [
      new TodoModel("Todo 1"),
      new TodoModel("Todo 2"),
    ];
    todoController.rT(2);
    expect((todoController as any).todos).toHaveLength(2);
    expect(mockView.displayTodos).toHaveBeenCalledWith(
      (todoController as any).todos
    );
  });

  it("should not remove any todo items if the index is negative", () => {
    (todoController as any).todos = [
      new TodoModel("Todo 1"),
      new TodoModel("Todo 2"),
    ];
    todoController.rT(-1);
    expect((todoController as any).todos).toHaveLength(2);
    expect(mockView.displayTodos).toHaveBeenCalledWith(
      (todoController as any).todos
    );
  });
});
