import { Button, Card } from "@/styles/layout";
import React from "react";
import b2bitLogo from "../../../../assets/icons/b2bit-logo.png";
import { Link } from "react-router-dom";
import { Header } from "../../ui/header/header";
import { useTranslation } from "react-i18next";

export const NotFoundView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <Header></Header>
      <Card className="flex justify-center items-center flex-col">
        <img
          alt="b2bit-logo"
          src={b2bitLogo}
          className="mx-6 self-center mb-10"
        ></img>
        <h2 className="font-nunito text-2xl text-neutral-content mb-10">
          {t("not-found.text")}
        </h2>

        <Link to={"/"} replace={true}>
          <Button text={t("not-found.goBack")}></Button>
        </Link>
      </Card>
    </main>
  );
};
