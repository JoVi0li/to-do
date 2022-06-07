import React from "react";
import { ToDo } from "../entities/toDo";
import { IToDoRepository } from "../repositories/iToDoRepository";

function useUpdateUseCase(repository: IToDoRepository){

  function execute(toDo: ToDo){
    return repository.update(toDo);
  }

  return { execute };
}

export { useUpdateUseCase };