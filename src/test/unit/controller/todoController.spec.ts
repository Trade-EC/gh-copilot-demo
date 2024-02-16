// FILEPATH: /var/www/html/DEMO-COPILOT/src/test/unit/todoController.spec.ts
import { TodoController } from '../../../todoController';
import { TodoModel } from '../../../todoModel';

jest.mock('../../../todoView', () => {
  return {
    TodoView: jest.fn().mockImplementation(() => {
      return { displayTodos: jest.fn() };
    }),
  };
});

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(() => {
    controller = new TodoController();
  });

  it('should add a task', () => {
    controller.addTask('Buy milk');
    expect(controller['todos']).toHaveLength(1);
    expect(controller['todos'][0]).toBeInstanceOf(TodoModel);
    expect(controller['todos'][0].title).toBe('Buy milk');
  });

  it('should remove a task', () => {
    controller.addTask('Buy milk');
    controller.removeTask(0);
    expect(controller['todos']).toHaveLength(0);
  });

  it('should toggle a task', () => {
    controller.addTask('Buy milk');
    controller.toggleTodo(0);
    expect(controller['todos'][0].completed).toBe(true);
  });

  it('should update a task title', () => {
    controller.addTask('Buy milk');
    controller.updateTodoTitle(0, 'Buy bread');
    expect(controller['todos'][0].title).toBe('Buy bread');
  });

  it('should filter tasks by creation day', () => {
    controller.addTask('Buy milk');
    const result = controller.filterTodosByCreationDay();
    expect(result).toEqual(['Fecha', controller['todos'][0]]);
  });
});