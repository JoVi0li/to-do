import React from "react";
import { IToDoRepository } from "../repositories/iToDoRepository";

function useReadUseCase(repository: IToDoRepository){

  function execute(id: string){
    return repository.read(id);
  }

  return { execute };
}

export { useReadUseCase };