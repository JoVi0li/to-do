import React from "react";
import { IToDoRepository } from "../repositories/iToDoRepository";

function useReadAllUseCase(repository: IToDoRepository){

  function execute(){
    return repository.readAll();
  }

  return { execute };
}

export { useReadAllUseCase };