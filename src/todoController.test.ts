import { TodoController } from './todoController';

describe('TodoController', () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  it('should add a new todo', () => {
    todoController.aT('New Todo');
    expect(todoController.getTodos().length).toBe(1);
    expect(todoController.getTodos()[0].title).toBe('New Todo');
    expect(todoController.getTodos()[0].completed).toBe(false);
  });

  it('should remove a todo', () => {
    todoController.aT('Todo 1');
    todoController.aT('Todo 2');
    todoController.rT(0);
    expect(todoController.getTodos().length).toBe(1);
    expect(todoController.getTodos()[0].title).toBe('Todo 2');
  });

  it('should toggle a todo', () => {
    todoController.aT('Toggle Todo');
    todoController.toggleTodo(0);
    expect(todoController.getTodos()[0].completed).toBe(true);
    todoController.toggleTodo(0);
    expect(todoController.getTodos()[0].completed).toBe(false);
  });

  it('should update a todo title', () => {
    todoController.aT('Old Title');
    todoController.updateTodoTitle(0, 'New Title');
    expect(todoController.getTodos()[0].title).toBe('New Title');
  });

  // Add more test cases as needed

});
