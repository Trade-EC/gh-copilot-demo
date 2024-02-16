import readline from "readline";
import { TodoController } from "./todoController";

const controller = new TodoController();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log("1. Add task");
  console.log("2. Remove task");
  console.log("3. Toggle todo");
  console.log("4. Filter todos by creation day");
  console.log("5. Exit");
  rl.question("Please choose an option: ", handleMenu);
}

function handleMenu(option: string) {
  switch (option) {
    case "1":
      rl.question("Enter task: ", (task) => {
        controller.addTask(task);
        displayMenu();
      });
      break;
    case "2":
      rl.question("Enter task index to remove: ", (index) => {
        controller.removeTask(parseInt(index));
        displayMenu();
      });
      break;
    case "3":
      rl.question("Enter task index to toggle: ", (index) => {
        controller.toggleTodo(parseInt(index));
        displayMenu();
      });
      break;
    case "4":
      rl.question("Enter creation day (YYYY-MM-DD): ", () => {
        const todos = controller.filterTodosByCreationDay();
        displayMenu();
      });
      break;
    case "5":
      rl.close();
      break;
    default:
      console.log("Invalid option");
      displayMenu();
      break;
  }
}

displayMenu();
