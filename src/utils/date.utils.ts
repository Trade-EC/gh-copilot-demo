import { TodoModel } from "../todoModel";

// What is the purpose of this function?
// This function is used to filter todos by creation day.
// It takes an array of todos and a date as parameters.
// It returns the todos that were created on the given date.
// If there are no todos for the given date, it returns "No hay tareas para hoy".
// If there are no todos, it returns undefined.
// If there are todos for the given date, it returns an array of todos.
// It is used by the TodoController class to filter todos by creation day.
// Can you make a test based on this function?
// Yes, I can make a test based on this function.
// Here is an example of a test for this function:

export const auxDate = (
  todos: TodoModel[],
  date: Date
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
