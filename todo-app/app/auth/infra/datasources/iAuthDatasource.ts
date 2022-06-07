export interface IAuthDatasource{
  signIn: () => Promise<{}>;
  signOut: () => void;
}