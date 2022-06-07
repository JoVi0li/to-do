import { LoggedUser } from "../entities/loggedUser";

export interface IAuthRepository{
  signIn: () => Promise<LoggedUser>;
  signOut: () => void;
}