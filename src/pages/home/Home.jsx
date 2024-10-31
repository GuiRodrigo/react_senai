import { useAuth } from "../../hooks/auth";

export default function Home() {
  const { userData, SignOut } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <p>Bem-Vindo a sua aplicação React! {userData.name} </p>
      <button onClick={SignOut}>Sair</button>
    </div>
  );
}
