import { TodoController } from "./todoController";
import { TodoModel } from "./todoModel";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  test("should add a todo", () => {
    todoController.aT("Test Todo");
    expect(todoController.getTodos()).toHaveLength(1);
    expect(todoController.getTodos()[0]).toBeInstanceOf(TodoModel);
    expect(todoController.getTodos()[0].title).toBe("Test Todo");
  });

  test("should remove a todo", () => {
    todoController.aT("Test Todo");
    todoController.rT(0);
    expect(todoController.getTodos()).toHaveLength(0);
  });

  test("should toggle todo completion status", () => {
    todoController.aT("Test Todo");
    todoController.toggleTodo(0);
    expect(todoController.getTodos()[0].completed).toBe(true);
  });

  test("should update todo title", () => {
    todoController.aT("Test Todo");
    todoController.updateTodoTitle(0, "Updated Todo");
    expect(todoController.getTodos()[0].title).toBe("Updated Todo");
  });

  test("should filter todos by creation day", () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    todoController.aT("Test Todo 1");
    todoController.getTodos()[0].creationDate = today;

    todoController.aT("Test Todo 2");
    todoController.getTodos()[1].creationDate = yesterday;

    const filteredTodos = todoController.filterTodosByCreationDay(today);
    expect(filteredTodos).toHaveLength(1);
    expect(filteredTodos[0].title).toBe("Test Todo 1");
  });
});
