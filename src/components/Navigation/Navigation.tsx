import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';


interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  return (
    <nav>
      <Navigate to="/" />
      <Navigate to="/home" />
    </nav>
  )
};

export default Navigation;
