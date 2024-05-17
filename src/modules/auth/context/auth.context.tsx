import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { UserModel } from "../models/user.model";
import { AuthToken } from "../models/auth-token.model";
import { UserAuthModel } from "../models/user-auth.model";
import { api } from "modules/api";
import { withAuthInterseptors } from "modules/api/interseptors/auth.interseptor";

interface AuthContextProps {
  user?: UserModel;
  token?: AuthToken;
  isAuthenticated: boolean;
  setAuthData: (userAuth: UserAuthModel) => void;
  logoutUser: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

interface AuthProviderProps extends React.PropsWithChildren {
  initialUser?: UserModel;
  initialToken?: AuthToken;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  initialToken,
  initialUser,
}) => {
  const [user, setUser] = useState<UserModel | undefined>(initialUser);
  const [token, setToken] = useState<AuthToken | undefined>(initialToken);
  const authInterseptorNumberRef = useRef<number>();

  const setAuthData = (userAuth: UserAuthModel) => {
    setUser(userAuth.user);
    setToken(userAuth.tokens);

    localStorage.setItem("userAuth", JSON.stringify(userAuth));

    if (userAuth.tokens) loadAuthInterseptors(userAuth.tokens.access);
  };

  const loadAuthInterseptors = (token: string) => {
    if (token) {
      unloadAuthInterseptors();
      const number = withAuthInterseptors(api, token);
      authInterseptorNumberRef.current = number;
    }
  };

  const unloadAuthInterseptors = () => {
    authInterseptorNumberRef.current &&
      api.interceptors.request.eject(authInterseptorNumberRef.current);
  };

  const logoutUser = () => {
    unloadAuthInterseptors();
    setAuthData({ user: undefined, tokens: undefined });
  };

  const isAuthenticated = useMemo(() => !!(user && token), [user, token]);

  useEffect(() => {
    if (token) {
      loadAuthInterseptors(token.access);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, user, isAuthenticated, setAuthData, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
