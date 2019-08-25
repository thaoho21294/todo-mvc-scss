export class Todo {
  constructor(
    public id: number, //timestamp
    public content: string,
    public isCompleted: boolean = false,
     ) {}
}