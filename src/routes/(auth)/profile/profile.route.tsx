import { ProfileView } from "modules/profile/view/profile";
import { PrivateRoute } from "modules/shared/core/private-route";
import React from "react";

export const ProfileRoute: React.FC = () => {
  return (
    <PrivateRoute withAuth={true}>
      <ProfileView></ProfileView>
    </PrivateRoute>
  );
};
