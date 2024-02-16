import { TodoController } from "./todoController";
import { TodoModel } from "./todoModel";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  it("should add a new todo and display todos", () => {
    const title = "New Todo";
    const newTodo = new TodoModel(title, false);

    todoController.addTodoAndDisplay(title);

    expect(todoController.todos).toContainEqual(newTodo);
  });

  it("should remove a todo and display todos", () => {
    const title = "New Todo";
    todoController.addTodoAndDisplay(title);

    todoController.removeTodo(0);

    expect(todoController.todos).toHaveLength(0);
  });
  it("should filter todos by creation day", () => {
    const title = "New Todo";
    todoController.addTodoAndDisplay(title);

    todoController.filterTodosByCreationDay(1);

    expect(todoController.todos).toHaveLength(1);
  });

  it("should find todos by title", () => {
    const title = "New Todo";
    todoController.addTodoAndDisplay(title);

    todoController.findTodosByTitle("New");

    expect(todoController.todos).toHaveLength(1);
  });
  it("should remove duplicated todos by title", () => {
    const title = "New Todo";
    todoController.addTodoAndDisplay(title);
    todoController.addTodoAndDisplay(title);

    todoController.removeDuplicatedTodosByTitle();

    expect(todoController.todos).toHaveLength(1);
  });
});
