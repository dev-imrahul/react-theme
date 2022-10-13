import { ReactNode } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

interface ProtectedRouteType {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  const { user }  = useAuth();
  if(!user) {
    return <Navigate to="/login" />
  }

  return children
}