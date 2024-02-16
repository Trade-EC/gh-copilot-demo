import { auxDate } from "../utils/date.utils";
import { TodoModel } from "../todoModel";

test("auxDate should return an array of todos for the given date", () => {
  const date = new Date();
  const todos: TodoModel[] = [
    new TodoModel("Buy milk", false),
    new TodoModel("Walk the dog", false),
    new TodoModel("Do laundry", false), // created yesterday
  ];

  const result = auxDate(todos, date);
  expect(result).toEqual([
    new TodoModel("Buy milk", false),
    new TodoModel("Walk the dog", false),
  ]);
});
