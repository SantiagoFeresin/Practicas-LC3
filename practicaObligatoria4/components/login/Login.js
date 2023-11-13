import { useState } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "../../services/authentication.context";

const Login = () => {
  const navigate = useNavigate();
  const { loginHandler } = useAuth();
  const [user, setUser] = useState("");
  const letters = ["o", "O"];

  const userChangeHandler = (event) => {
    if (letters.some((letter) => event.target.value.includes(letter))) {
      /* In this case it would be better to use:
      if (event.target.value.toUpperCase().includes("O"))
      To avoid creating the letters array and overcomplicate the conditional*/
      alert("Por favor, ¡Nombres de usuario sin la letra o!");
    }
    setUser(event.target.value);
  };

  const signUpHandler = (event) => {
    event.preventDefault();
    if (user.length === 0 || letters.some((letter) => user.includes(letter))) {
      alert("Usuario inválido para registrarse");
      return;
    }
    loginHandler(user);
    navigate("/");
  };

  return (
    <div>
      <form>
        <input
          placeholder="Usuario"
          onChange={userChangeHandler}
          value={user}
        />
      </form>
      <button onClick={signUpHandler}>Registrarse</button>
      <p>{user}</p>
    </div>
  );
};

export default Login;
