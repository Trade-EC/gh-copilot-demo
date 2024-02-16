import { filterTodosForToday } from './date.utils';

describe('auxDate', () => {
  it('should return "No hay tareas para hoy" when there are no tasks for today', () => {
    const todos = [
      { creationDate: '2022-01-01' },
      { creationDate: '2022-01-02' },
      { creationDate: '2022-01-03' },
    ];

    expect(filterTodosForToday(todos)).toBe('No hay tareas para hoy');
  });

  it('should return an array of tasks for today', () => {
    const today = new Date().toDateString();
    const todos = [
      { creationDate: '2022-01-01' },
      { creationDate: new Date().toISOString() },
      { creationDate: '2022-01-03' },
    ];

    const result = filterTodosForToday(todos);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(1);
    expect(result[0].creationDate.toDateString()).toBe(today);
  });

  it('should return undefined when todos is an empty array', () => {
    const todos: TodoModel[] = [];

    expect(filterTodosForToday(todos)).toBeUndefined();
  });
});