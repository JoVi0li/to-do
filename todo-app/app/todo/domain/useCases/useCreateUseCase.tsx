import React from "react";
import { ToDo } from "../entities/toDo";
import { IToDoRepository } from "../repositories/iToDoRepository";

function useCreateUseCase(repository: IToDoRepository){

  function execute(toDo: ToDo){
    return repository.create(toDo);
  }

  return { execute };
}

export { useCreateUseCase };