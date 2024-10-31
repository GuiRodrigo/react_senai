import React from "react";
import { useState } from "react";
import "./style.css";
import { useAuth } from "../../hooks/auth";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState();

  const { SignUp } = useAuth();

  function handleBack() {
    window.location.href = "/";
  }

  function handleSubmit() {
    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    if (name === "") {
      setHasError(true);

      setErrorType("nameError");
      return;
    } else if (email === "" || !emailRegex.test(email)) {
      setHasError(true);

      setErrorType("emailError");
      return;
    } else if (password === "") {
      setHasError(true);

      setErrorType("passwordError");
      return;
    } else if (password !== confirmPassword) {
      setHasError(true);

      setErrorType("confirmPasswordError");
      return;
    } else if (!passwordRegex.test(password)) {
      setHasError(true);

      setErrorType("invalidPasswordError");
      return;
    } else {
      const user = {
        email,
        password,
        name,
      };
      setHasError(false);
      // alert("Cadastro realizado com sucesso!");
      SignUp(user);
      setErrorType("");
    }
  }

  return (
    <div className="ContentCadastro">
      <p onClick={handleBack}>Voltar</p>
      <div className="DialogCadastro">
        <h2>Cadastrar</h2>
        <input
          type="text"
          onChange={(v) => setName(v.target.value)}
          value={name}
          placeholder="Nome"
        />
        {hasError && errorType === "nameError" && (
          <p className="error">Preencha o nome</p>
        )}
        <input
          type="email"
          onChange={(v) => setEmail(v.target.value)}
          value={email}
          placeholder="E-mail"
        />
        {hasError && errorType === "emailError" && (
          <p className="error">Campo vazio ou inválido</p>
        )}
        <input
          type="password"
          onChange={(v) => setPassword(v.target.value)}
          value={password}
          placeholder="Senha"
        />
        {hasError && errorType === "passwordError" && (
          <p className="error">Crie uma senha</p>
        )}
        <input
          type="password"
          onChange={(v) => setConfirmPassword(v.target.value)}
          value={confirmPassword}
          placeholder="Senha"
        />
        {hasError && errorType === "confirmPasswordError" && (
          <p className="error">As senhas devem ser iguais</p>
        )}
        {hasError && errorType === "invalidPasswordError" && (
          <p className="error">
            A senha deve conter uma letra maiúscula, uma minúscula, um número e
            um caractere especial e 8 caracteres
          </p>
        )}
        <button onClick={handleSubmit} type="submit">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
