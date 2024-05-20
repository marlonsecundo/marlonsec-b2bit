import { AuthProvider } from "@/modules/auth/context/auth.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";
import { BrowserRouter } from "react-router-dom";
import i18n from "./_i18n.mock";
import { I18nextProvider } from "react-i18next";

const queryClient = new QueryClient();

export const ProvidersMock: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </I18nextProvider>
  );
};
