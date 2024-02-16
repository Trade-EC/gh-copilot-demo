// FILEPATH: /Users/ricardovaca/workspace/tradec/playground/gh-copilot-demo/test/todoController.test.ts
import { TodoController } from "../src/todoController";
import { TodoModel } from "../src/todoModel";

describe('TodoController', () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  test('should add a todo', () => {
    todoController.aT('Test Todo');
    expect(todoController['todos']).toHaveLength(1);
    expect(todoController['todos'][0]).toBeInstanceOf(TodoModel);
    expect(todoController['todos'][0].title).toBe('Test Todo');
  });

  test('should remove a todo', () => {
    todoController.aT('Test Todo');
    todoController.rT(0);
    expect(todoController['todos']).toHaveLength(0);
  });

  test('should toggle todo completion', () => {
    todoController.aT('Test Todo');
    todoController.toggleTodo(0);
    expect(todoController['todos'][0].completed).toBe(true);
  });

  test('should update todo title', () => {
    todoController.aT('Test Todo');
    todoController.updateTodoTitle(0, 'Updated Todo');
    expect(todoController['todos'][0].title).toBe('Updated Todo');
  });

  test('should filter todos by creation day', () => {
    todoController.aT('Test Todo');
    const filteredTodos = todoController.filterTodosByCreationDay();
    expect(filteredTodos).toHaveLength(1);
  });
});