import { TodoModel } from "../todoModel";

export const filterTodosByDate = (
  todos: TodoModel[],
  date: Date
): TodoModel[] => {
  const filteredTodos: TodoModel[] = todos.filter((todo) => {
    const todoDate = new Date(todo.creationDate).toDateString();
    const targetDate = date.toDateString();
    return todoDate === targetDate;
  });

  if (filteredTodos.length === 0) {
    throw new Error("No hay tareas para la fecha especificada");
  }

  return filteredTodos;
};
