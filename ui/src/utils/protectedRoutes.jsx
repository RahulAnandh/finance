import { Outlet, Navigate } from "react-router-dom";
const ProtectedRoutes = () => {
  const isLogin = null;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoutes;
