import React, { FC, useContext } from 'react';
import { AuthContext, useAuth } from '../../../hooks/useAuth';


interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const { login }  = useAuth();
  const data = useContext(AuthContext);

  const loginHandler = () => {
    if(login)
      login('rahul')
  }
  return (
    <div data-testid="Login">
      <button onClick={ loginHandler }>Login</button>
      Login Component
    </div>
  )
};

export default Login;
