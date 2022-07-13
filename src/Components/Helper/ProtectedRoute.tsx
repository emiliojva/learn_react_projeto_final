import React from "react";
import { UserContext } from "../../UserContext";
import IUserContextReturn from "../../Model/Interfaces/IUserContextReturn";
import { Navigate } from "react-router";
import Login from "../Login/Login";

const ProtectedRoute = ({ children }: any) => {
  const { login } = React.useContext<IUserContextReturn>(UserContext);
  return login ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
