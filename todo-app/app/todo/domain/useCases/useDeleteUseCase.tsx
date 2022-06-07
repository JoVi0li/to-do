import React from "react";
import { IToDoRepository } from "../repositories/iToDoRepository";

function useDeleteUseCase(repository: IToDoRepository){

  function execute(id: string){
    return repository.exclude(id);
  }

  return { execute };
}

export { useDeleteUseCase };