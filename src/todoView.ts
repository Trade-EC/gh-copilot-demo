/**
 * Represents a TodoView class that displays todos.
 */
export class TodoView {
  /**
   * Displays the todos with their titles and completion status.
   * @param todos - An array of todos.
   */
  displayTodos(todos: { title: string; completed: boolean }[]): void {
    todos.forEach((todo, index) => {
      const status = todo.completed ? "(Done)" : "";
      console.log(`${index + 1}. ${todo.title} ${status}`);
    });
  }
}
