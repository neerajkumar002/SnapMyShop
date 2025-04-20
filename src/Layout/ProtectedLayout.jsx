import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = ({ isAuthenticated, user, allowedRoles = [] }) => {
  const location = useLocation();

  if (!user) {
    return <div>Loading..</div>;
  }

  // Not authenticated: redirect to login page
  if (!isAuthenticated && !user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
