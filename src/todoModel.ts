import { ITodoModel } from "./types/todoModel.types";

export class TodoModel implements ITodoModel {
  constructor(
    public title: string,
    public completed: boolean = false,
    public creationDate: Date = new Date()
  ) {}
}
