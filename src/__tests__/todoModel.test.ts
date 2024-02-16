import { TodoModel } from "../todoModel";

describe("TodoModel", () => {
  it("should create a new todo with default values", () => {
    const todo = new TodoModel("My Todo");
    expect(todo.title).toBe("My Todo");
    expect(todo.completed).toBe(false);
    expect(todo.creationDate).toBeInstanceOf(Date);
  });

  it("should create a new todo with custom values", () => {
    const todo = new TodoModel("My Completed Todo", true);
    expect(todo.title).toBe("My Completed Todo");
    expect(todo.completed).toBe(true);
    expect(todo.creationDate).toBeInstanceOf(Date);
  });
});
