import Register from "pages/Auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./Guard/RequireAuth";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/Auth/Login/Login.lazy";
import UserList from "./pages/UserList/UserList.lazy";

export default function Routers() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={
            <UserList />
          } />
          <Route path="home" element={
            <UserList />
            // <RequireAuth>
            //   <UserList />
            // </RequireAuth>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  )
}