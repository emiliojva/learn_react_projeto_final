import React, { FormEvent } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { USER_POST } from "../../ApiService";
import { UserContext } from "../../UserContext";
import { useFetch } from "../../useFetch";
import Error from "../Helper/Error";

const LoginCreate = () => {
  const username: any = useForm("");
  const email: any = useForm("email");
  const password: any = useForm("password");

  const { userLogin } = React.useContext<any>(UserContext);
  const { data, request, loading, error } = useFetch();

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const body = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    /**
     * Pega params url e options para cadastro de usuario.
     */
    const { url, options } = USER_POST(body);

    /**
     * Desestrura o retorno IFechResponse e informa a tipo para json
     * Retorna um inteiro com ID do novo usuario
     */
    const { response } = await request<number>(url, options);

    if (response && response.ok === true)
      userLogin(body.username, body.password);
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}

        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
