import React from "react";
import { ToDo } from "../../domain/entities/toDo";
import { IToDoRepository } from "../../domain/repositories/iToDoRepository";
import { IToDoDatasource } from "../datasource/iToDoDatasource";

function useToDoRepository(datasource: IToDoDatasource): IToDoRepository {

  async function create(toDo: ToDo) {
    try {
      return await datasource.create(toDo);
    } catch (error) {
      console.error(error);
    }
  }

  async function read(id: string) {
    try {
      return await datasource.read(id);
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function readAll() {
    try {
      return await datasource.readAll();
    } catch (error) {
      console.error(error);
      return []
    }
  }

  async function exclude(id: string) {
    try {

    } catch (error) {
      console.error(error);

    }
  }

  async function update(toDo: ToDo) {
    try {

    } catch (error) {
      console.error(error);
    }
  }

  return {
    create,
    read,
    readAll,
    exclude,
    update,
  };
}

export { useToDoRepository };