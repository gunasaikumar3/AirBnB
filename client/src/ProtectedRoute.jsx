import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const accessToken = useSelector((state) => state.auth.access);
  if (!accessToken) return <Navigate to="/" replace />;
  return children;
}
