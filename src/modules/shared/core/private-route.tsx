import { useAuthContext } from "modules/auth/context/auth.context";
import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface Props extends PropsWithChildren {
  withAuth: boolean;
}

export const PrivateRoute: React.FC<Props> = ({ withAuth, children }) => {
  const { isAuthenticated } = useAuthContext();

  if (withAuth && !isAuthenticated)
    return <Navigate replace={true} to={"/login"}></Navigate>;

  return <>{children}</>;
};
