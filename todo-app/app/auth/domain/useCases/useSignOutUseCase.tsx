import React from "react";
import { IAuthRepository } from "../repositories/iAuthRepository";

function useSignOutUseCase(repository: IAuthRepository){

  function execute(){
    return repository.signOut();
  }

  return { execute };
}

export { useSignOutUseCase };