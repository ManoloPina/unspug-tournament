import React, { useState } from "react";
//types
import { IAuth } from "types/Authentication";

export interface IContext {
  user: IAuth | null;
  setUser: (user: IAuth) => void;
}

export const AuthContext = React.createContext<IContext>({
  user: null,
  setUser: (_user) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [innerUser, setInnerUser] = useState<IAuth | null>(null);
  return (
    <AuthContext.Provider
      value={{
        user: innerUser,
        setUser: (user: IAuth) => setInnerUser(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
