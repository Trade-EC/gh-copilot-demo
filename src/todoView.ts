/**
 * Represents a TodoView class that displays todos.
 */
export class TodoView {
  /**
   * Displays the todos in the console.
   * @param todos - An array of todos.
   */
  displayTodos(todos: { title: string; completed: boolean }[]): void {
    todos.forEach((todo, index) => {
      console.log(
        `${index + 1}. ${todo.title} ${todo.completed ? "(Done)" : ""}`
      );
    });
  }
}
