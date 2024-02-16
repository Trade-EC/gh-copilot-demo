import { TodoController } from "../src/todoController";

describe("TodoController", () => {
  let controller: TodoController;

  beforeEach(() => {
    controller = new TodoController();
  });

  test("should add a todo", () => {
    controller.aT("Test todo");
    const todos = controller.getTodos();
    expect(todos).toHaveLength(1);
    expect(todos[0].title).toBe("Test todo");
    expect(todos[0].completed).toBe(false);
  });

  test("should remove a todo", () => {
    controller.aT("Test todo");
    controller.rT(0);
    expect(controller.getTodos()).toHaveLength(0);
  });

  test("should toggle todo completion", () => {
    controller.aT("Test todo");
    controller.toggleTodo(0);
    expect(controller.getTodos()[0].completed).toBe(true);
  });

  test("should update todo title", () => {
    controller.aT("Test todo");
    controller.updateTodoTitle(0, "Updated title");
    expect(controller.getTodos()[0].title).toBe("Updated title");
  });

  test("should filter todos by creation day", () => {
    controller.aT("Test todo");
    const filteredTodos = controller.filterTodosByCreationDay();
    expect(filteredTodos).toHaveLength(1);
  });
});
