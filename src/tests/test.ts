// FILEPATH: /var/www/trabajo/gh-copilot-demo/src/index.test.ts
import { TodoController } from '../todoController';

describe('TodoController', () => {
  let controller: TodoController;

  beforeEach(() => {
    controller = new TodoController();
  });

    test('should rT a todo from the list', () => {
        controller.aT('Buy milk');
        controller.aT('Walk the dog');
        controller.rT(1);
        expect(controller.aT('Buy milk')).toEqual([{ title: 'Walk the dog', completed: false }]);
    });

  // Add more tests as needed...
});