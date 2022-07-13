import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import { UserContext, UserStorage } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import PageUser from "./Components/User/PageUser";
import IUserContextReturn from "./Model/Interfaces/IUserContextReturn";

function App() {
  return (
    <div className="App">
      {/* Navegador base de rotas. */}
      <BrowserRouter>
        {/* Contexto global para funcoes e estados de autenticacao dos usuarios */}
        <UserStorage>
          {/* Cabeçalho estático */}
          <Header />
          {/* Primeiro grupo de rotas */}
          <Routes>
            {/* Página Home */}
            <Route path="/" element={<Home />} />
            {/* Página Login */}
            <Route path="/login/*" element={<Login />} />
            {/* Página Conta - Rota protegida com Componente ProtectedRoute */}
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <PageUser />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* Rodapé estático */}
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
