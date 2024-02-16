import { TodoModel } from "../todoModel";

export const filterTodosByDate = (
  todos: TodoModel[],
  date: Date
): string | TodoModel[] => {
  const targetDate = date;
  const filteredTodos: TodoModel[] = [];
  
  todos.forEach(todo => {
    const todoCreationDate = new Date(todo.creationDate);
    if (todoCreationDate.toDateString() === targetDate.toDateString()) {
      filteredTodos.push(todo);
    }
  });

  return filteredTodos.length === 1 ? "No hay tareas para hoy" : filteredTodos;
};
