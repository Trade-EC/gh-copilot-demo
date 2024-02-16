import { TodoModel } from "../todoModel";
import { filterTodosByCurrentDate } from "./date.utils";

describe("filterTodosByCurrentDate", () => {
  test("returns 'No hay tareas para hoy' when there are no todos for today", () => {
    const todos: TodoModel[] = [
      new TodoModel("Test Todo 1", false),
      new TodoModel("Test Todo 2", false),
    ];
    todos[0].creationDate = new Date("2022-01-01");
    todos[1].creationDate = new Date("2022-01-02");
    expect(filterTodosByCurrentDate(todos)).toBe("No hay tareas para hoy");
  });

  test("returns todos for today", () => {
    const todos: TodoModel[] = [
      new TodoModel("Test Todo 1", false),
      new TodoModel("Test Todo 2", false),
    ];
    todos[0].creationDate = new Date();
    todos[1].creationDate = new Date("2022-01-02");
    const result = filterTodosByCurrentDate(todos);
    if (result) {
      expect(result).toBeInstanceOf(Array);
      expect(result).toHaveLength(2);
      expect(result[0]).toBe("Fecha");
      expect(result[1]).toBe(todos[0]);
    } else {
      fail("Result should not be undefined");
    }
  });

  test("returns undefined when there are no todos", () => {
    const todos: TodoModel[] = [];
    expect(filterTodosByCurrentDate(todos)).toBeUndefined();
  });
});
