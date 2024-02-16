import { TodoView } from "../todoView";

describe("TodoView", () => {
  let todoView: TodoView;

  beforeEach(() => {
    todoView = new TodoView();
  });

  it("should display todos with their titles and completion status", () => {
    const todos = [
      { title: "Task 1", completed: true },
      { title: "Task 2", completed: false },
      { title: "Task 3", completed: true },
    ];

    const consoleSpy = jest.spyOn(console, "log");
    todoView.displayTodos(todos);

    expect(consoleSpy).toHaveBeenCalledTimes(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "1. Task 1 (Done)");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "2. Task 2 ");
    expect(consoleSpy).toHaveBeenNthCalledWith(3, "3. Task 3 (Done)");
  });
});
