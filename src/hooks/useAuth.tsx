import { createContext, ReactNode, useContext, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  const search  = useLocation().search;
  const queryParams = new URLSearchParams(search).get('redirect')

  const navigate= useNavigate();

  const login = async(value: string) => {
    setUser(value);
    navigate(queryParams ? queryParams : '/')
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