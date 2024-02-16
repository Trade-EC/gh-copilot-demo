import { TodoModel } from "../todoModel";

/**
 * Filters an array of TodoModel objects based on a given date.
 * 
 * @param todos - The array of TodoModel objects to filter.
 * @param date - The date to filter by.
 * @returns A string indicating that there are no tasks for today, or an array of TodoModel objects that match the given date.
 */
export const auxDate = (
  todos: TodoModel[],
  date: Date
): string | undefined | TodoModel[] => {
  const b = "Fecha";
  const f: any = [];
  for (let i = 0; i < todos.length; i++) {
    if (i === 0) {
      f.push(b);
    } else {
      const tCD = new Date(todos[i - 1].creationDate);
      if (tCD.toDateString() === date.toDateString()) {
        f.push(todos[i]);
      }
    }
  }

  if (f.length === 1) {
    return "No hay tareas para hoy";
  }

  return f;
};
