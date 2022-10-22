import { Navigate, useLocation, useParams, useRoutes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"

interface ProtectedRouteType {
  children: JSX.Element
}

export const ProtectedRoute = ({ children }: ProtectedRouteType) => {
  const { user }  = useAuth();
  // return 'hello'
  let {pathname} = useLocation();
  console.log(pathname)
  if(!user) {
    return <Navigate to={`/login?navigate=${pathname}`}  />
  }

  return children
}