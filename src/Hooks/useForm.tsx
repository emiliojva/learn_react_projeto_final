import React, { Dispatch } from "react";

export const types: IUseFormTypes = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    message:
      "A senha precisa ter um dígito(0-9), caracter maiuculo(A-Z), caracter minusculo(a-z) e deve conter ao menos 8 caracteres",
  },
};

const useForm = (type: string | boolean): IUseFormReturns => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const types_key: string = String(type); // versao string do type(fix lint typescript)

  /**
   * Para não validar passe FALSE (preenchimento ou tipo).
   * Senão a função irá validar se o campo está vazio e o possui um tipo válido.
   *
   */
  function validate(value: string): boolean {
    if (type === false) return true;

    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (
      types[types_key] &&
      types[types_key].regex.test(value) === false
    ) {
      setError(types[types_key].message);
      return false;
    } else {
      console.log(value);
      setError(null);
      return true;
    }
  }

  function onChange({ target }: Event) {
    if (target !== null) {
      const targetElement = target as HTMLInputElement; // cast to HTMLInputElement
      if (error) validate(targetElement.value);
      setValue(targetElement.value);
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

export interface IUseFormTypes {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
}

export interface IUseFormReturns {
  value: string;
  setValue: Dispatch<string>;
  onChange: (event: Event) => void;
  error: string | null;
  validate: (value: string) => boolean;
  onBlur: () => {};
}
