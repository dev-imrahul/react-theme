import { createContext, ReactNode, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useStorage from "./useStorage";

interface authContextType {
  user: string,
  login?: (data: any) => void;
  logout?: (data: any) => void;
}

export const AuthContext = createContext<authContextType>({
  user: '',
});

export const AuthProvider = (props: JSX.IntrinsicAttributes & { children: ReactNode }) => {
  const [user, setUser] = useStorage('user', '');

  const navigate= useNavigate();

  const login = async(value: string) => {
    setUser(value);
    navigate('/')
  };

  const logout = async () => {
    setUser('');
    navigate('/login')
  }

  const value = useMemo(() => ({
    user, login, logout
  }), [user]);

  return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
}