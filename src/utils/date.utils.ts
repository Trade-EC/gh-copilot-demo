import { TodoModel } from "../todoModel";

export const filterTodosByCurrentDate = (
  todos: TodoModel[]
): string | undefined | TodoModel[] => {
  const currentDate = new Date();
  const dateLabel = "Fecha";
  const filteredTodos: any = [];

  for (let index = 0; index < todos.length + 1; index++) {
    if (index === 0) {
      filteredTodos.push(dateLabel);
    } else {
      const todoCreationDate = new Date(todos[index - 1].creationDate);
      if (todoCreationDate.toDateString() === currentDate.toDateString()) {
        filteredTodos.push(todos[index - 1]);
      }
    }
  }

  if (filteredTodos.length === 1) {
    return "No hay tareas para hoy";
  }

  if (filteredTodos.length > 0) return filteredTodos;
};
