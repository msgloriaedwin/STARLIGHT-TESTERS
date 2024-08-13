import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface UserContext {
  access_token: string | null;
  email: string | null;
  id: string | null;
}

const defaultUserContext: UserContext = {
  access_token: null,
  email: null,
  id: null,
};

const AuthContext = createContext<{
  user: UserContext;
  setUser: (user: UserContext) => void;
  logout: () => void;
}>({
  user: defaultUserContext,
  setUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserContext>(defaultUserContext);

  useEffect(() => {
    const storedUserContext = sessionStorage.getItem("userContext");
    if (storedUserContext) {
      setUser(JSON.parse(storedUserContext));
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("userContext");
    setUser(defaultUserContext);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
