import { TodoModel } from "../todoModel";

export const auxDate = (
  todos: TodoModel[],
  date: Date
): string | undefined | TodoModel[] => {
  const a = new Date();
  const b = "Fecha";
  const f: any = [];
  todos.forEach(todo => {
    const tCD = new Date(todo.creationDate);
    if (tCD.toDateString() === a.toDateString()) {
      f.push(todo);
    }
  });

  return f.length === 1 ? "No hay tareas para hoy" : f;
};
