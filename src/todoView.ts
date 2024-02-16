import { Todo } from "./interfaces/todo.types";

/**
 * Represents a TodoView class that displays todos.
 */
export class TodoView {
  /**
   * Displays the todos with their titles and completion status.
   * @param todos - An array of todos.
   */
  displayTodos(todos: Todo[]): void {
    todos.forEach((todo, index) => {
      console.log(
        `${index + 1}. ${todo.title} ${todo.completed ? "(Done)" : ""}`
      );
    });
  }
}
