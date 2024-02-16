import inquirer from "inquirer";
import { TodoController } from "./todoController";
import { Answers } from "./utils/types.utils";

const todoController = new TodoController();

const questions = [
  {
    type: "list",
    name: "operation",
    message: "¿Qué te gustaría hacer?",
    choices: [
      "Agregar un nuevo todo",
      "Eliminar un todo",
      "Actualizar un todo",
      "Ver todos los TODOS",
      "Salir",
    ],
  },
  {
    type: "input",
    name: "title",
    message: "Introduce el título del todo:",
    when: (answers: Answers) => answers.operation === "Agregar un nuevo todo",
  },
  {
    type: "number",
    name: "index",
    message: "Introduce el índice del todo a eliminar:",
    when: (answers: Answers) => answers.operation === "Eliminar un todo",
  },
  {
    type: "input",
    name: "newTitle",
    message: "Introduce el nuevo título del todo:",
    when: (answers: Answers) => answers.operation === "Actualizar un todo",
  },
];

async function main() {
  const answers: Answers = await inquirer.prompt(questions);

  switch (answers.operation) {
    case "Agregar un nuevo todo":
      if (answers.title) {
        todoController.addTodo(answers.title);
      }
      break;
    case "Eliminar un todo":
      if (typeof answers.index === "number") {
        todoController.removeTodo(answers.index);
      }
      break;
    case "Actualizar un todo":
      if (typeof answers.index === "number" && answers.newTitle) {
        todoController.updateTodoTitle(answers.index, answers.newTitle);
      }
      break;
    case "Ver todos los TODOS":
      todoController.displayTodos();
      break;
    case "Salir":
      process.exit();
  }

  main();
}

main();
