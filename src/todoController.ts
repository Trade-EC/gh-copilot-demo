import { TodoModel } from "./todoModel";
import { TodoView } from "./todoView";
import { filterObjArrayByCreationDate } from "./utils/date.utils";

export class TodoController {
  public todos: TodoModel[] = [];
  private view: TodoView;

  constructor() {
    this.view = new TodoView();
  }

  /**
   * Adds a new todo with the specified title and displays the updated list of todos.
   * @param title - The title of the new todo.
   */
  public addTodoAndDisplay(title: string): void {
    const newTodo = new TodoModel(title, false);
    this.todos.push(newTodo);
    this.view.displayTodos(this.todos);
  }

  /**
   * Removes a todo item from the todos array at the specified index.
   * @param index - The index of the todo item to be removed.
   */
  public removeTodo(index: number): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (i === index) {
        this.todos.splice(i, 1);
        break;
      }
    }
    this.view.displayTodos(this.todos);
  }

  /**
   * Retrieves todos for today and displays them.
   */
  public retrieveTodosForToday(): void {
    const todosForToday = filterObjArrayByCreationDate(this.todos);
    this.view.displayTodos(todosForToday);
  }

  /**
   * Filters the todos based on the specified creation day and displays the filtered todos.
   * @param day - The day to filter the todos by.
   */
  public filterTodosByCreationDay(day: number): void {
    const filteredTodos = this.todos.filter((todo) => {
      const todoDate = new Date(todo.creationDate);
      return todoDate.getDate() === day;
    });
    this.view.displayTodos(filteredTodos);
  }

  /**
   * Finds todos by title and displays them.
   * @param title - The title to search for.
   */
  public findTodosByTitle(title: string): void {
    const filteredTodos = this.todos.filter((todo) =>
      todo.title.includes(title)
    );
    this.view.displayTodos(filteredTodos);
  }

  /**
   * Removes duplicated todos based on their title.
   * @returns {void}
   */
  public removeDuplicatedTodosByTitle(): void {
    const filteredTodos = this.todos.filter((todo, index) => {
      return this.todos.findIndex((t) => t.title === todo.title) === index;
    });
    this.view.displayTodos(filteredTodos);
  }
}
