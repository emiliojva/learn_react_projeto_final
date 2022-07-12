import { Dispatch } from "react";

export default interface IUseFormReturns {
  value: string;
  setValue: Dispatch<string>;
  onChange: (event: Event) => void;
  error: string | null;
  validate: (value: string) => boolean;
  onBlur: () => {};
}
