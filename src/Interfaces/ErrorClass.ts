declare class ErrorClass implements Error {
  public name: string;
  public message: string;
  constructor(message?: string);
}

export default ErrorClass;