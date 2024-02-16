/**
 * Represents a todo item.
 */
export interface Todo {
    /** The title of the todo item. */
    title: string;
    /** Indicates whether the todo item is completed or not. */
    completed: boolean;
}

export class TodoView {
    /**
     * Displays the todos with their titles and completion status.
     * @param todos - An array of todos.
     */
    displayTodos(todos: Todo[]): void {
        todos.forEach((todo, index) => {
            const status = todo.completed ? "(Done)" : "(Pending)";
            console.log(`${index + 1}. ${todo.title} ${status}`);
        });
    }
}
