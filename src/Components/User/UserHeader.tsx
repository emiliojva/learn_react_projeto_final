import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState<null | string>(null); // Genericamente o valor pode ser null ou string

  const location: any = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    console.log("rota atual", pathname);

    let titulo = "Minhas fotos";
    switch (pathname) {
      case "/conta/estatiticas":
        titulo = "Estatísticas";
        break;
      case "/conta/postar":
        titulo = "Adicionar Foto";
        break;
    }

    setTitle(titulo);
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
