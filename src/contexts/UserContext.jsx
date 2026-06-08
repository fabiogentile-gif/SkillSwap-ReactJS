import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loggedIn, setloggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loggedIn,
        setloggedIn,
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}