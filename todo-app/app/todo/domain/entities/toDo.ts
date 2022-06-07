export class ToDo{

  readonly id: string;
  readonly title: string;
  readonly description: string;
  done: boolean;

  constructor(
    id: string,
    title: string,
    description: string,
    done: boolean,
  ){
    this.id = id;
    this.title = title;
    this.description = description;
    this.done = done;
  }
}