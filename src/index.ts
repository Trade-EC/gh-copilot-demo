import { TodoController } from './todoController';
import readline from 'readline';

const controller = new TodoController();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log('--- Todo App Menu ---');
    console.log('1. Add Task');
    console.log('2. Remove Task');
    console.log('3. Display Tasks');
    console.log('4. Exit');
}

function handleMenuChoice(choice: string) {
    switch (choice) {
        case '1':
            rl.question('Enter task name: ', (taskName) => {
                controller.addTask(taskName);
                displayMenu();
                rl.prompt();
            });
            break;
        case '2':
            rl.question('Enter task index: ', (taskIndex) => {
                controller.removeTask(parseInt(taskIndex));
                displayMenu();
                rl.prompt();
            });
            break;
        case '3':
            controller.displayTodos();
            displayMenu();
            rl.prompt();
            break;
        case '4':
            rl.close();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            displayMenu();
            rl.prompt();
            break;
    }
}

displayMenu();
rl.prompt();

rl.on('line', (line) => {
    handleMenuChoice(line.trim());
}).on('close', () => {
    console.log('Exiting Todo App');
    process.exit(0);
});

