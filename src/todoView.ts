/**
 * Represents a TodoView class that displays todos.
 */

//Can you explain me what this class do?
//It displays the todos with their titles and completion status.
//It is used by the TodoController class to display the todos.
export class TodoView {
  /**
   * Displays the todos with their titles and completion status.
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
