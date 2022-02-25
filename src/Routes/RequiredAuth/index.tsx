import React from "react";
import { useAuth } from "hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
//types
import { ROUTES } from "const";

interface Props {
  children: JSX.Element;
}

const RequiredAuth: React.FC<Props> = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  return children;
};

export default RequiredAuth;
