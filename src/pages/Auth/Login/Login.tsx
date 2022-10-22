import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';


interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { login }  = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = async () => {
    setTimeout(() => {
      if(login) {
        login('rahul');
        navigate(state?.path || "/");
      }
    }, 2000)
  }
  return (
    <div data-testid="Login">
      <button onClick={ loginHandler }>Login</button>
      Login Component
    </div>
  )
};

export default Login;
