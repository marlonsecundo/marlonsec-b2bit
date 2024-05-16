import { useAuthContext } from "modules/auth/context/auth.context";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  withAuth: boolean;
}

export const PrivateRoute: React.FC<Props> = ({ withAuth, children }) => {
  const { isAuthenticated } = useAuthContext();

  if (withAuth && !isAuthenticated) return <></>;

  return <>{children}</>;
};
