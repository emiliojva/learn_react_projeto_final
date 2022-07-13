import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./ApiService";
import { useNavigate } from "react-router-dom";
import IUserValidateTokenResponse from "./Model/Interfaces/IUserValidateTokenResponse";

export const UserContext = React.createContext<any>({});

export const UserStorage = ({ children }: any) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState<boolean | null>(null);
  const [loading, setLoading] = React.useState<boolean | null>(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      window.localStorage.removeItem("token");
      navigate("/login");
    },
    [navigate]
  );

  async function getUser(token: string) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  /**
   *  Autentica usuaário e navega para rota '/conta'
   */
  async function userLogin(username: string, password: string): Promise<void> {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes: Response = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token }: IUserValidateTokenResponse = await tokenRes.json(); //
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (err: any) {
      console.log(err);
      setError(err.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    console.log("userContext Effect");
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        console.log("meu token", token);
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          console.log("meu response", response);

          if (!response.ok) {
            throw new Error("Token inválido");
          }

          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      } else {
        setLogin(false);
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
