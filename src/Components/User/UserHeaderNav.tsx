import React from "react";
import { NavLink } from "react-router-dom";
import IUserContextReturn from "../../Model/Interfaces/IUserContextReturn";
import { UserContext } from "../../UserContext";
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Estataticas } from "../../Assets/estatisticas.svg";
import { ReactComponent as Postar } from "../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  /**
   * Uso do Context do usuário para acesso ao function de logout na api;
   */
  const { userLogout } = React.useContext<IUserContextReturn>(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  /* 
  Hook que monitora resizes da tela. 
  Informa se esta no modo mobile(max-width: 40rem) 
  */
  let mobile = useMedia("(max-width: 40rem)");

  React.useEffect(() => {}, []);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobile)}
          className={styles.mobileButton}
        ></button>
      )}

      <nav className={styles.nav}>
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/conta/estatiticas">
          <Estataticas />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Postar />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
