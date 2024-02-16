import { TodoController } from "../todoController";

describe('TodoController', () => {
  let todoController: TodoController;

  beforeEach(() => {
    todoController = new TodoController();
  });

  it('should add a new task to the todo list', () => {
    todoController.addTask('Task 1');
    expect(todoController['todos'].length).toBe(1);
    expect(todoController['todos'][0].title).toBe('Task 1');
    expect(todoController['todos'][0].completed).toBe(false);
  });

  it('should remove a task from the todo list', () => {
    todoController.addTask('Task 1');
    todoController.addTask('Task 2');
    todoController.removeTask(0);
    expect(todoController['todos'].length).toBe(1);
    expect(todoController['todos'][0].title).toBe('Task 2');
    expect(todoController['todos'][0].completed).toBe(false);
  });

  it('should toggle the completion status of a task', () => {
    todoController.addTask('Task 1');
    todoController.toggleTodo(0);
    expect(todoController['todos'][0].completed).toBe(true);
    todoController.toggleTodo(0);
    expect(todoController['todos'][0].completed).toBe(false);
  });

  it('should update the title of a task', () => {
    todoController.addTask('Task 1');
    todoController.updateTodoTitle(0, 'New Task');
    expect(todoController['todos'][0].title).toBe('New Task');
  });

  it('should filter the todos based on the creation day', () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    todoController.addTask('Task 1');
    todoController.addTask('Task 2');
    todoController.addTask('Task 3');

    expect(todoController.filterTodosByCreationDay()?.length).toEqual(4);
  });
});