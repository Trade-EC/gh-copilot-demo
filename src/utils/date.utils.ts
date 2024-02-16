import { TodoModel } from "../todoModel";

export const filterObjArrayByCreationDate = (
  todos: TodoModel[]
): TodoModel[] => {
  const a = new Date();
  const f = todos.filter((todo) => {
    const tCD = new Date(todo.creationDate);
    return tCD.toDateString() === a.toDateString();
  });

  return f;
};
