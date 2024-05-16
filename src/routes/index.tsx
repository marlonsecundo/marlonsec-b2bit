import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginRoute } from "./login/login.route";
import { ProfileRoute } from "./(auth)/profile/profile.route";

export const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute></LoginRoute>} />
      <Route path="/profile" element={<ProfileRoute></ProfileRoute>}></Route>
    </Routes>
  );
};
