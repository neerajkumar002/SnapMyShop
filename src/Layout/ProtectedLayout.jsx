import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedLayout = ({ role, authenticated }) => {
  return <Outlet />;
};

export default ProtectedLayout;
