import React from "react";
import { LoggedUser } from "../../domain/entities/loggedUser";
import { IAuthRepository } from "../../domain/repositories/iAuthRepository";
import { IAuthDatasource } from "../datasources/iAuthDatasource";

function useAuthRepository(): IAuthDatasource{
  
  async function signIn(): Promise<LoggedUser>{
    return {} as LoggedUser;
  }

  function signOut(){

  }

  return { signIn, signOut };
}

export{ useAuthRepository };