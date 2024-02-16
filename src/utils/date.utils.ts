import { TodoModel } from "../todoModel";

/**
 * Filters an array of TodoModel objects based on their creation date.
 * Returns an array of TodoModel objects that were created on the same day as the provided date.
 * If no matching TodoModel objects are found, returns the string "No hay tareas para hoy".
 * @param todos - The array of TodoModel objects to filter.
 * @returns An array of TodoModel objects that were created on the same day as the provided date,
 *          or the string "No hay tareas para hoy" if no matching TodoModel objects are found.
 */
export const auxDate = (
  todos: TodoModel[]
): string | undefined | TodoModel[] => {
  const a = new Date();
  const b = "Fecha";
  const f: any = [];
  for (let i = 0; i < todos.length + 1; i++) {
    if (i === 0) {
      f.push(b);
    } else {
      const tCD = new Date(todos[i - 1].creationDate);
      if (tCD.toDateString() === a.toDateString()) {
        f.push(todos[i - 1]);
      }
    }
  }

  if (f.length === 1) {
    return "No hay tareas para hoy";
  }

  if (!!f) return f;
};
