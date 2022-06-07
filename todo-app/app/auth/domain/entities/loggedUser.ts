class LoggedUser{
  
  readonly id: string;
  readonly token: string;
  readonly name: string;
  readonly email: string;

  constructor(
    id: string,
    token: string,
    name: string,
    email: string
  ){
    this.id = id;
    this.token = token;
    this.name = name;
    this.email = email;
  }
}

export { LoggedUser };