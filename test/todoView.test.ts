import mockConsole from 'jest-mock-console';
import { TodoView } from '../src/todoView';

describe('TodoView', () => {
  let todoView: TodoView;
  let restore: ReturnType<typeof mockConsole>;

  beforeEach(() => {
    todoView = new TodoView();
    // Simulamos la consola antes de cada prueba
    restore = mockConsole();
  });

  afterEach(() => {
    // Restauramos la consola después de cada prueba
    restore();
  });

  test('should display todos correctly', () => {
    const todos = [
      { title: 'Todo 1', completed: false },
      { title: 'Todo 2', completed: true },
    ];

    todoView.displayTodos(todos);

    // Verificamos que la consola ha sido llamada con los mensajes correctos
    expect(console.log).toHaveBeenCalledWith('1. Todo 1 ');
    expect(console.log).toHaveBeenCalledWith('2. Todo 2 (Done)');
  });

  test('should display empty list if no todos', () => {
    const todos: { title: string, completed: boolean }[] = [];

    todoView.displayTodos(todos);

    // Verificamos que la consola no ha sido llamada
    expect(console.log).not.toHaveBeenCalled();
  });
});