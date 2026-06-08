import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [firstTimeShown, setFirstTimeShown] = useState(false);
  const [pages, setPages] = useState("Login");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setloggedIn,
        showLogin,
        setShowLogin,
        firstTimeShown,
        setFirstTimeShown,
        pages,
        setPages,

      }}
    >
      {children}
    </UserContext.Provider>
  );
}