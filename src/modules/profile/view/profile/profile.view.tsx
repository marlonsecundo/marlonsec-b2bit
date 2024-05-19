import React from "react";
import { Card, Input } from "@/styles/layout";
import { useController } from "./controller";
import { ProfileField } from "./ui/profile-field";
import { Header } from "@/modules/shared/ui/header/header";
import { WithSkeleton } from "@/modules/shared/hoc/with-skeleton.hoc";
import { profileImageSkeleton } from "./skeleton";

export const ProfileView: React.FC = () => {
  const controller = useController();
  const { profile, isLoading } = controller;

  return (
    <div className="h-screen w-screen">
      <Header></Header>
      <main className="bg-base-secondary flex h-full justify-center items-center">
        <Card className="p-8 px-6 d-flex flex-col min-w-[40%]">
          <div className="flex justify-center items-center flex-col">
            <p className="font-nunito font-semibold text-sm">Profile Picture</p>

            <WithSkeleton isLoading={isLoading} skeleton={profileImageSkeleton}>
              <img
                className="max-w-[50%] rounded mt-1"
                src={profile?.avatar?.low}
              ></img>
            </WithSkeleton>
          </div>

          <div className="mt-10"></div>

          <ProfileField
            isLoading={isLoading}
            label="Name"
            value={profile?.name ?? ""}
          ></ProfileField>

          <div className="mt-5"></div>

          <ProfileField
            aria-label="email-field"
            isLoading={isLoading}
            label="E-mail"
            value={profile?.email ?? ""}
          ></ProfileField>
        </Card>
      </main>
    </div>
  );
};
