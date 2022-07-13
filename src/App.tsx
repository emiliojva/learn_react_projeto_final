import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import UserPage from "./Components/User/UserPage";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
