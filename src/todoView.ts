import chalk from 'chalk';
/**
 * Represents a TodoView class that displays todos.
 */
export class TodoView {
    /**
     * Displays the todos with their titles and completion status.
     * @param todos - An array of todos.
     */
    displayTodos(todos: { title: string, completed: boolean }[]): void {
        console.log("############ TODO TASKS ############");
        todos.forEach((todo, index) => {
            const status = todo.completed ? chalk.green('(Done)') : '';
            console.log(`${index + 1}. ${chalk.blue(todo.title)} ${status}`);
        });
    }
}

