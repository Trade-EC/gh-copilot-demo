import { TodoController } from "./todoController";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  it("should add a new todo item to the list", () => {
    const title = "New Todo";
    todoController.addTodo(title);
    expect(todoController["todos"].length).toBe(1);
    expect(todoController["todos"][0].title).toBe(title);
  });

  it("should remove a todo item from the list", () => {
    const title = "Todo to be removed";
    todoController.addTodo(title);
    const index = 0;
    todoController.removeTodo(index);
    expect(todoController["todos"].length).toBe(0);
  });

  it("should toggle the completion status of a todo item", () => {
    const title = "Todo to toggle";
    todoController.addTodo(title);
    const index = 0;
    const initialCompletedStatus = todoController["todos"][index].completed;
    todoController.toggleTodo(index);
    expect(todoController["todos"][index].completed).toBe(
      !initialCompletedStatus
    );
  });

  it("should update the title of a todo item", () => {
    const title = "Todo to update";
    const newTitle = "Updated Todo";
    todoController.addTodo(title);
    const index = 0;
    todoController.updateTodoTitle(index, newTitle);
    expect(todoController["todos"][index].title).toBe(newTitle);
  });

  it("should filter the todos by creation day", () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    todoController.addTodo("Todo 1");
    todoController.addTodo("Todo 2");
    todoController.addTodo("Todo 3");

    const filteredTodos = todoController.filterTodosByCreationDay();
    expect(filteredTodos?.length).toBe(4);

    todoController["todos"][0].creationDate = yesterday;
    const filteredTodosYesterday = todoController.filterTodosByCreationDay();
    expect(filteredTodosYesterday?.length).toBe(3);

    todoController["todos"][1].creationDate = tomorrow;
    const filteredTodosToday = todoController.filterTodosByCreationDay();
    expect(filteredTodosToday?.length).toBe(2);
  });
});
