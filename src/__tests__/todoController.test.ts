import { TodoController } from "../todoController";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  it("should display todos", () => {
    // Arrange
    const todos = [
      { title: "Todo 1", completed: false },
      { title: "Todo 2", completed: true },
    ];
    jest.spyOn(todoController["view"], "displayTodos");
    // Act
    todoController.displayTodos();

    // Assert
    expect(todoController["view"].displayTodos).toHaveBeenCalledWith(todos);
  });

  it("should add a new todo item", () => {
    // Arrange
    const title = "New Todo";
    jest.spyOn(todoController["view"], "displayTodos");

    // Act
    todoController.aT(title);

    // Assert
    expect(todoController["todos"]).toHaveLength(1);
    expect(todoController["todos"][0].title).toBe(title);
    expect(todoController["todos"][0].completed).toBe(false);
    expect(todoController["view"].displayTodos).toHaveBeenCalledWith(
      todoController["todos"]
    );
  });

  it("should remove a todo item", () => {
    // Arrange
    const index = 0;
    todoController["todos"] = [
      { title: "Todo 1", completed: false, creationDate: new Date() },
      { title: "Todo 2", completed: true, creationDate: new Date() },
    ];
    jest.spyOn(todoController["view"], "displayTodos");

    // Act
    todoController.rT(index);

    // Assert
    expect(todoController["todos"]).toHaveLength(1);
    expect(todoController["todos"][0].title).toBe("Todo 2");
    expect(todoController["todos"][0].completed).toBe(true);
    expect(todoController["view"].displayTodos).toHaveBeenCalledWith(
      todoController["todos"]
    );
  });

  it("should toggle the completion status of a todo item", () => {
    // Arrange
    const index = 0;
    todoController["todos"] = [
      { title: "Todo 1", completed: false, creationDate: new Date() },
      { title: "Todo 2", completed: true, creationDate: new Date() },
    ];
    jest.spyOn(todoController["view"], "displayTodos");

    // Act
    todoController.toggleTodo(index);

    // Assert
    expect(todoController["todos"][index].completed).toBe(true);
    expect(todoController["view"].displayTodos).toHaveBeenCalledWith(
      todoController["todos"]
    );
  });

  it("should filter todos by creation day", () => {
    // Arrange
    const date = new Date("2022-01-01");
    const filteredTodos = [
      { title: "Todo 1", completed: false },
      { title: "Todo 2", completed: true },
    ];
    jest.spyOn(todoController["view"], "displayTodos");

    // Act
    const result = todoController.filterTodosByCreationDay(date);

    // Assert
    expect(result).toEqual(filteredTodos);
    expect(todoController["view"].displayTodos).toHaveBeenCalledWith(
      filteredTodos
    );
  });
});
