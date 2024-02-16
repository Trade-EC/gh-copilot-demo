import { TodoModel } from "./todoModel";

/**
 * Represents a TodoView class that displays todos.
 */
export class TodoView {
  /**
   * Displays the todos with their titles and completion status, surrounded by a border of "=" characters.
   * @param {TodoModel[]} todos - An array of todos.
   * @param {string} customMessage - A custom message to display above the list of todos.
   */
  public displayTodos(todos: TodoModel[], customMessage: string): void {
    this.printBorder();
    console.log(customMessage);
    this.printBorder();
    todos.forEach((todo, index) => {
      console.log(
        `${index + 1}. ${todo.title} - ${todo.completed ? "Done" : "Not Done"}`
      );
    });
    this.printBorder();
  }

  /**
   * Prints a border of "=" characters to the console.
   */
  public printBorder(): void {
    console.log("=".repeat(50));
  }
}
