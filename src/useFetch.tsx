import React from "react";
import IUseFetchResponse from "./Model/Interfaces/IUseFetchResponse";

export const useFetch = function <T>(): IUseFetchReturns<T> {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  /**
   * useCallback  - Não recriar função toda vez que ouver RE-RENDER nas mudanças de estados(states)
   * async/await  - Função que aguardar toda requisição e json serem resolvidos linha a linha sem muitos callbacks ou thens(sugar Promises https://javascript.plainenglish.io/javascript-a-fast-trip-for-dummies-from-callbacks-to-es6-async-await-a61b0a4b0bed)
   * function <J> - Generalização com Interfaces. A função request conhece a interface Response.
   * Mas não conhece o tipo de json a ser retonardo.
   */
  const request = React.useCallback(async function <J>(
    url: string,
    options: {}
  ) {
    let response: any, json: J | any;
    try {
      // tentar request aqui
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (error: any) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  },
  []);

  return {
    data,
    request,
    loading,
    error,
  };
};

export interface IUseFetchReturns<T> {
  data: T | null;
  request: <T>(url: string, options: {}) => Promise<IUseFetchResponse<T>>; // função que retorna uma IUseFetchResponse por uma async(Promise) com tipo generico
  loading: boolean | null;
  error: string | null;
}
