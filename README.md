# TODO List App

This is a simple TODO list application that runs in the terminal. It is written in TypeScript and runs on Node.js. The application uses arrays to store the todos instead of a database.

## Project Structure

The project has the following structure:

- `src/index.ts`: The entry point of the application.
- `src/todoController.ts`: Contains the `TodoController` class with methods for adding, removing, and displaying todos.
- `src/todoModel.ts`: Contains the `TodoModel` class which represents a todo item.
- `src/todoView.ts`: Contains the `TodoView` class with methods for displaying the todos in the terminal.
- `tsconfig.json`: The configuration file for TypeScript.
- `package.json`: The configuration file for npm.

## Running the Application

To run the application, follow these steps:

1. Install the dependencies with `yarn install`.
2. Compile the TypeScript code with `tsc`.
3. Run the application with `node dist/index.js`.

## How to Test

To test the TODO list application, you can follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the command `yarn test` to execute the test suite.
3. Observe the test results and ensure that all tests pass.

## Note

This application is intentionally written with bad programming practices and bugs for educational purposes. It is used to demonstrate how to use GitHub Copilot to identify and fix issues in the code.
