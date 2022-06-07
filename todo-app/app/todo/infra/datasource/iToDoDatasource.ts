import { ToDo } from "../../domain/entities/toDo";

export interface IToDoDatasource{
  create: (toDo: ToDo) => Promise<void>;
  read: (id: string) => Promise<ToDo | null>;
  readAll: () => Promise<ToDo[]>;
  exclude: (id: string) => Promise<void>;
  update: (toDo: ToDo) => Promise<void>;
}