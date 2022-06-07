import React from "react";
import { IAuthRepository } from "../repositories/iAuthRepository";

function useSignInUseCase(repository: IAuthRepository){

  async function execute(){
    return await repository.signIn();
  }

  return { execute };
}

export { useSignInUseCase };