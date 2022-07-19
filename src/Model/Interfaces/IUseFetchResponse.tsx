/**
 * A resposta de um fetch sabemos o tipo do Response. Porém o json pode ser um Usuario, Produto, Comprar ou etc.
 * Por isso generalizamos com o token T;
 */
export default interface IUseFetchResponse<T> {
  response: Response | null;
  json: T;
}
