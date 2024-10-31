import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login.jsx";
import Cadastro from "../pages/cadastro/Cadastro.jsx";
import Home from "../pages/home/Home.jsx";
import { useAuth } from "../hooks/auth.jsx";

const RoutesApp = () => {
  const { userData } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {userData && <Route path="/home" element={<Home />} />}
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
