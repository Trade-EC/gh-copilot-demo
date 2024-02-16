import { TodoModel } from "../todoModel";

/**
 * Filters an array of TodoModel objects based on a given date.
 * @param todos - The array of TodoModel objects to filter.
 * @param date - The date to filter the TodoModel objects by.
 * @returns Either a string indicating that there are no tasks for the given date, or an array of filtered TodoModel objects.
 */
export const auxDate = (
  todos: TodoModel[],
  date: Date
): string | undefined | TodoModel[] => {
  const f: any = [];
  for (let i = 0; i < todos.length; i++) {
    const tCD = new Date(todos[i].creationDate);
    if (tCD.toDateString() === date.toDateString()) {
      f.push(todos[i]);
    }
  }

  if (f.length === 0) {
    return "No hay tareas para hoy";
  }

  return f;
};