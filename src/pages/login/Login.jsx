import React, { useState } from "react";
import { useAuth } from "../../hooks/auth";

import "./style.css";

const Login = () => {
  const { SignIn } = useAuth();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState();

  function handleNavigateRegister() {
    window.location.href = "/cadastro";
  }

  function handleSubmit() {
    if (email === "") {
      setHasError(true);
      setErrorType("emailError");
      return;
    } else if (password === "") {
      setHasError(true);
      setErrorType("passwordError");
      return;
    } else {
      const user = {
        email,
        password,
      };
      setHasError(false);
      SignIn(user);
      window.location.href = "/home";
      setErrorType("");
    }
  }

  return (
    <div className="ContentLogin">
      <div className="DialogLogin">
        <h2>Login</h2>
        <input
          type="text"
          onChange={(v) => {
            setEmail(v.target.value);
          }}
          placeholder="Email"
        />
        {hasError && errorType === "emailError" && (
          <p className="error">Campo vazio</p>
        )}
        <input
          type="password"
          onChange={(v) => {
            setPassword(v.target.value);
          }}
          placeholder="Password"
        />
        {hasError && errorType === "passwordError" && (
          <p className="error">Campo vazio</p>
        )}
        <button onClick={handleSubmit}>Login</button>
        <button onClick={handleNavigateRegister}>Cadastrar</button>
      </div>
    </div>
  );
};

export default Login;
