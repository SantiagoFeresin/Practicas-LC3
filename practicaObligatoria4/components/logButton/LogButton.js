import { useNavigate } from "react-router";

import { useAuth } from "../../services/authentication.context";

const LogButton = () => {
  const navigate = useNavigate();
  const { user, logoutHandler } = useAuth();

  const clickHandler = () => (user ? logoutHandler() : navigate("/login"));

  return (
    <button onClick={clickHandler}>
      {user ? "Cerrar sesión" : "Inicio de sesión"}
    </button>
  );
};

export default LogButton;
