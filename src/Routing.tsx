import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Guard/ProtectedRoute";
import { AuthProvider } from "./hooks/useAuth";
import Login from "./pages/Auth/Login/Login.lazy";
import UserList from "./pages/UserList/UserList.lazy";

export default function Routers() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" 
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  )
}