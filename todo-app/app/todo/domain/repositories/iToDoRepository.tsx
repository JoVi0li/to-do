import React from "react";
import { ToDo } from "../entities/toDo";

export interface IToDoRepository{
  create: (toDo: ToDo) => Promise<void>;
  read: (id: string) => Promise<ToDo | null>;
  readAll: () => Promise<Array<ToDo>>;
  exclude: (id: string) => Promise<void>;
  update: (toDo: ToDo) => Promise<void>;
}