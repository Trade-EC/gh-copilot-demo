import { TodoModel } from "../todoModel";

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
