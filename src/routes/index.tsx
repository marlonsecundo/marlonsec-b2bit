import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginRoute } from "./login/login.route";
import { ProfileRoute } from "./(auth)/profile/profile.route";
import { NotFoundView } from "@/modules/shared/view/not-found/not-found.view";

export const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute></LoginRoute>} />
      <Route path="/login" element={<LoginRoute></LoginRoute>} />
      <Route path="/profile" element={<ProfileRoute></ProfileRoute>}></Route>
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};
