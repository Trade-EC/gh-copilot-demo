// import { TodoModel } from '../../../todoModel';
// import { auxDate } from '../../../utils/date.utils';

// describe('auxDate', () => {
//   it('should return "No hay tareas para hoy" if there are no tasks for today', () => {
//     const todos = [new TodoModel('some string')]; // replace 'some string' with the correct string
//     const result = auxDate(todos, new Date());
//     expect(result).toBe('No hay tareas para hoy');
//   });

//   it('should return tasks for today', () => {
//     const todos = [new TodoModel('some string')]; // replace 'some string' with the correct string
//     const result = auxDate(todos, new Date());
//     expect(result).toEqual(['Fecha', todos[0]]);
//   });

//   it('should return "Fecha" if there are no tasks', () => {
//     const todos: TodoModel[] = [];
//     const result = auxDate(todos, new Date());
//     expect(result).toEqual(['Fecha']);
//   });
// });
