import {ReactNode, createContext, useState, useContext} from "react";

interface IUser {
  email: string;
  username: string;
  avatarColor: string;
}
interface IAuthContext {
  token: null | string;
  user: null | IUser;
  setCredentials: (token: string, user: IUser) => void;
}

export const AuthContext = createContext<IAuthContext>({
  token: null,
  user: null,
  setCredentials: (token: string, user: IUser) => {},
});

interface Props {
  children: ReactNode;
}

export function AuthContextProvider({children}: Props) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);

  const setCredentials = (token: string, user: IUser) => {
    setToken(token);
    setUser(user);
  };

  const contextValue = {
    token,
    user,
    setCredentials,
  };
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
}

export const useAuthContext = () => useContext(AuthContext);
