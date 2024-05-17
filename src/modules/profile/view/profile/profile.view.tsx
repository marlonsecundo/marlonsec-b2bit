import React from "react";
import { Card, Input } from "styles/layout";
import { useController } from "./controller";
import { ProfileField } from "./ui/profile-field";
import { Header } from "modules/shared/ui/header/header";

export const ProfileView: React.FC = () => {
  const controller = useController();
  const { profile } = controller;

  return (
    <div className="h-screen w-screen">
      <Header></Header>
      <main className="bg-base-secondary flex h-full justify-center items-center">
        <Card className="p-8 px-6 d-flex flex-col min-w-[40%]">
          <div className="flex justify-center items-center flex-col">
            <p className="font-nunito font-semibold text-sm">Profile Picture</p>
            <img
              className="max-w-[50%] rounded mt-1"
              src={profile?.avatar?.low}
            ></img>
          </div>

          <div className="mt-14"></div>

          <ProfileField label="Name" value={profile?.name ?? ""}></ProfileField>

          <div className="mt-5"></div>

          <ProfileField
            label="E-mail"
            value={profile?.email ?? ""}
          ></ProfileField>
        </Card>
      </main>
    </div>
  );
};
