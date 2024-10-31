import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  // ReactNode,
} from "react";

// interface AuthProviderProps {
//   children: ReactNode;
// }

// interface AuthContextData {
//   userData: userDataInfo | undefined;
//   SignUp: (user: userDataInfo) => void;
//   SignIn: (user: userDataInfo) => void;
// }

// export type userDataInfo = {
//   password: number;
//   name: string;
//   email: string;
// };

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useState();
  const [userDatas, setUserDatas] = useState([]);
  // implementar as funçoes e afins do contexto

  function SignUp(user) {
    let newArray = userDatas;

    newArray.unshift(user);

    console.log(newArray);

    localStorage.setItem("allUsers", JSON.stringify(newArray));
    setUserDatas(newArray);

    // localStorage.setItem("user", JSON.stringify(user));
    // setUserData(user);
  }

  function SignIn(user) {
    let logado = false;
    console.log(user.email);
    userDatas.forEach((item) => {
      if (item) {
        if (item.email === user.email && item.password === user.password) {
          setUserData(item);
          alert("Logado com sucesso!");
          localStorage.setItem("user", JSON.stringify(item));
          logado = true;
          return;
        }
      }
    });
    !logado && alert("usuario n encontrado!");
  }

  function SignOut() {
    setUserData(undefined);
    localStorage.removeItem("user");
    window.location.href = "/";
  }

  useEffect(() => {
    var allUsers = localStorage.getItem("allUsers");
    if (allUsers) {
      setUserDatas(JSON.parse(allUsers));
    }
    var user = localStorage.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    console.log("usuario");
    console.log(userData);
    console.log("usuarioS");
    console.log(userDatas);
  }, [userData, userDatas]);

  return (
    <AuthContext.Provider value={{ SignUp, userData, SignIn, SignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
