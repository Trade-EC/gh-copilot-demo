import { TodoModel } from "../todoModel";

export const filterTodosByDate = (
  todos: TodoModel[],
  date: Date
): string | TodoModel[] => {
  const targetDateString = date.toDateString();
  const filteredTodos = todos.filter(
    (todo) => new Date(todo.creationDate).toDateString() === targetDateString
  );

  if (filteredTodos.length === 0) {
    return "No hay tareas para hoy";
  }

  return filteredTodos;
};
