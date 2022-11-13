import Register from "pages/Auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.lazy";
import { RequireAuth } from "./Guard/RequireAuth";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/Auth/Login/Login.lazy";
import UserList from "./pages/UserList/UserList.lazy";
export function Nav() {
  return (
    <Route path="/" element={ <UserList /> } />
  )
}
export default function Routers() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
            <RequireAuth>
              <UserList />
            </RequireAuth>
          } />
          <Route path="home" element={
            <RequireAuth>
              <UserList />
            </RequireAuth>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}