import { TodoController } from "./todoController";

describe("TodoController", () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  it("should add a task", () => {
    todoController.addTask("Task 1");
    expect(todoController["todos"].length).toBe(1);
    expect(todoController["todos"][0].title).toBe("Task 1");
    expect(todoController["todos"][0].completed).toBe(false);
  });

  it("should remove a task", () => {
    todoController.addTask("Task 1");
    todoController.addTask("Task 2");
    todoController.removeTask(0);
    expect(todoController["todos"].length).toBe(1);
    expect(todoController["todos"][0].title).toBe("Task 2");
  });

  it("should filter todos by creation day", () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    todoController.addTask("Task 1");
    todoController.addTask("Task 2");

    const filteredTodos = todoController.filterTodosByCreationDay() as any[]; // Type assertion to ensure 'filteredTodos' is of type array
    expect(filteredTodos.length).toBe(3);

    todoController["todos"][0].creationDate = yesterday;
    const filteredTodos2 = todoController.filterTodosByCreationDay() as any[]; // Type assertion to ensure 'filteredTodos2' is of type array
    expect(filteredTodos2.length).toBe(2);
  });
});
