import { TodoModel } from "../todoModel";

/**
 * Filters an array of TodoModel objects to only include those created on the current day.
 * @param todos - The array of TodoModel objects to filter.
 * @returns An array of TodoModel objects created on the current day.
 */
export const filterTodosByToday = (todos: TodoModel[]): TodoModel[] => {
  const today = new Date();
  const filteredTodos: TodoModel[] = [];

  for (const todo of todos) {
    const todoCreationDate = new Date(todo.creationDate);
    if (isSameDay(todoCreationDate, today)) {
      filteredTodos.push(todo);
    }
  }

  return filteredTodos;
};

/**
 * Checks if two dates are the same day.
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns True if the dates are the same day, false otherwise.
 */
const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};
