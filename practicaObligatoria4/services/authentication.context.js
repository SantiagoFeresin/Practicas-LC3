import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

const storedUser = JSON.parse(localStorage.getItem("user"));

export const useAuth = () => useContext(AuthenticationContext);

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(storedUser);

  const loginHandler = (currentUser) => {
    localStorage.setItem("user", JSON.stringify({ ...user, currentUser }));
    setUser(currentUser);
  };

  const logoutHandler = () => {
    localStorage.removeItem("user");
    setUser();
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, loginHandler, logoutHandler }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
