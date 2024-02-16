import { TodoModel } from "../todoModel";

export const auxDate = (
  todos: TodoModel[],
  date: Date
): TodoModel[] | undefined => {
  const today = new Date().setHours(0, 0, 0, 0);
  const filteredTodos: TodoModel[] = [];

  for (let i = 0; i < todos.length; i++) {
    const tCD = new Date(todos[i].creationDate).setHours(0, 0, 0, 0);
    if (tCD === today) {
      filteredTodos.push(todos[i]);
    }
  }

  if (filteredTodos.length === 0) {
    return undefined;
  }

  return filteredTodos;
};
