export default interface IUseFormTypes {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
}