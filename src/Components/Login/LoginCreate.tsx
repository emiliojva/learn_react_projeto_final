import React, { FormEvent } from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useForm";
import { IUser, USER_POST } from "../../ApiService";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username: any = useForm("");
  const email: any = useForm("email");
  const password: any = useForm("password");

  const { userLogin } = React.useContext<any>(UserContext);
  // userLogin();

  const handleSubmit = async (event: FormEvent): Promise<{ id: number }> => {
    event.preventDefault();
    const body = {
      username: username.value,
      email: email.value,
      password: password.value,
    };
    const { url, options } = USER_POST(body);
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);
    if (response.ok === true) userLogin(body.username, body.password);

    return json;
  };

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Cadastrar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
