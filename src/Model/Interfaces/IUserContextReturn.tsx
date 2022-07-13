import UserModel from "../UserModel";

export default interface IUserContextReturn {
  userLogin: (username: string, password: string) => Promise<void>;
  userLogout: () => Promise<void>;
  data: UserModel;
  error: boolean;
  loading: boolean;
  /**
   * Login:state - Informa se usuário está logado
   * @property Login
   * @type boolean
   *
   */
  login: boolean;
}
