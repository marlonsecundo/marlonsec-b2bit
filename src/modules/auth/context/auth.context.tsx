import { createContext, useContext, useMemo, useState } from "react";
import { UserModel } from "../models/user.model";
import { AuthToken } from "../models/auth-token.model";
import { UserAuthModel } from "../models/user-auth.model";

interface AuthContextProps {
  user?: UserModel;
  token?: AuthToken;
  isAuthenticated: boolean;
  setAuthData: (userAuth: UserAuthModel) => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [user, setUser] = useState<UserModel | undefined>();
  const [token, setToken] = useState<AuthToken | undefined>();

  const setAuthData = (userAuth: UserAuthModel) => {
    setUser(userAuth.user);
    setToken(userAuth.tokens);
  };

  const isAuthenticated = useMemo(() => !!(user && token), [user, token]);

  return (
    <AuthContext.Provider value={{ token, user, isAuthenticated, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
