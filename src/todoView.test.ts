import { TodoView } from "./todoView";

describe("TodoView", () => {
  let view: TodoView;
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    view = new TodoView();
    consoleSpy = jest.spyOn(console, "log");
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("printBorder prints a border", () => {
    view.printBorder();
    expect(consoleSpy).toHaveBeenCalledWith("=".repeat(50));
  });
});
