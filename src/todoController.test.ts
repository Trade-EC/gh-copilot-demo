import { TodoController } from "./todoController";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  test("should add a todo", () => {
    todoController.addTodo("Test todo");
    expect(todoController.displayTodos()).toHaveLength(1);
  });

  test("should delete a todo", () => {
    todoController.addTodo("Test todo");
    todoController.removeTodo(0);
    expect(todoController.displayTodos()).toHaveLength(0);
  });

  // Agrega aquí más pruebas para los otros métodos
});
