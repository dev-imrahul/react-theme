import { ReactNode } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

interface RequireAuthType {
  children: JSX.Element
}

export const RequireAuth = ({ children }: RequireAuthType) => {
  const { user }  = useAuth();
  const location = useLocation();
  if(!user) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />
  }

  return children
}