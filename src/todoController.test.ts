import { TodoController } from './todoController';
import { TodoModel } from './todoModel';
import { TodoView } from './todoView'; // Add import statement for TodoView

describe('TodoController', () => {
  let todoController: TodoController;

beforeEach(() => {
    todoController = new TodoController();
});

it('should add a new todo', () => {
    // Arrange
    const title = 'Buy groceries';
    const expectedTodo = new TodoModel(title, false);

    // Act
    todoController.aT(title);

    // Assert
    expect((todoController as any).todos).toContainEqual(expectedTodo);
});
}); // Add closing curly brace
