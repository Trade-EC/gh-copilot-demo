// Make sure the path is correct
import { TodoModel } from "../todoModel";

// Jest functions should now be recognized
describe("TodoModel", () => {
  it("should create a new todo item with a title and default completion status", () => {
    /**
     * Represents a todo item.
     * @class
     */
    const todo = new TodoModel("Test Todo");
    expect(todo.title).toBe("Test Todo");
    expect(todo.completed).toBe(false);
    expect(todo.creationDate).toBeInstanceOf(Date);
  });

  it("should create a new todo item with a title and a specified completion status", () => {
    const todo = new TodoModel("Test Todo", true);
    expect(todo.title).toBe("Test Todo");
    expect(todo.completed).toBe(true);
    expect(todo.creationDate).toBeInstanceOf(Date);
  });

  it("should record the creation date and time of a new todo item", () => {
    const beforeCreation = new Date();
    const todo = new TodoModel("Test Todo");
    const afterCreation = new Date();
    expect(todo.creationDate.getTime()).toBeGreaterThanOrEqual(
      beforeCreation.getTime()
    );
    expect(todo.creationDate.getTime()).toBeLessThanOrEqual(
      afterCreation.getTime()
    );
  });
});
