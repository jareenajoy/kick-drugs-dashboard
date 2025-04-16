
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AccessDenied from './AccessDenied';

export default function ProtectedRoute({ allowedRoles, children }) {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <Navigate to="/login" replace />;
  if (!allowedRoles.includes(user.role)) return <AccessDenied />;

  return children;
}
