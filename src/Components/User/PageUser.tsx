import React from "react";
import { Route, Routes } from "react-router-dom";
import PageUserFeed from "./PageUserFeed";
import PageUserPhotoPost from "./PageUserPhotoPost";
import PageUserStats from "./PageUserStats";
import UserHeader from "./UserHeader";

const PageUser = () => {
  return (
    <section className="container">
      {/* Header da pagina de Usuarios */}
      <UserHeader />
      {/* Rotas abaixo de /conta/{*} */}
      <Routes>
        {/* Feed de Cães - /conta */}
        <Route path="/" element={<PageUserFeed />}></Route>
        {/* Adicionar nova foto de um cão - /conta/postar*/}
        <Route path="/postar" element={<PageUserPhotoPost />}></Route>
        {/* Página com estatíscas de acessos do site - /conta/estatisticas */}
        <Route path="/estatiticas" element={<PageUserStats />}></Route>
      </Routes>
    </section>
  );
};

export default PageUser;
