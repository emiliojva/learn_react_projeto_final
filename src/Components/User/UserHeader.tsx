import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  /*Alterações de estado do titulo do dashboard */
  const [title, setTitle] = React.useState<null | string>("Minhas fotos"); // Genericamente o valor pode ser null ou string

  const location: any = useLocation();

  React.useEffect(() => {
    const { pathname } = location;

    /*Switch titulo do dashboard da /conta  */
    switch (pathname) {
      case "/conta/estatiticas":
        setTitle("Estatísticas");
        break;
      case "/conta/postar":
        setTitle("Adicionar Foto");
        break;
      default:
        setTitle("Minhas fotos");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      {/* Header Nav da Página User/Conta */}
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
