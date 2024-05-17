import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RootRouter } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "modules/auth/context/auth.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserAuthModel } from "modules/auth/models/user-auth.model";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const storageAuth = localStorage.getItem("userAuth");

const userAuth = storageAuth
  ? (JSON.parse(storageAuth) as UserAuthModel)
  : undefined;

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider
        initialToken={userAuth?.tokens}
        initialUser={userAuth?.user}
      >
        <BrowserRouter>
          <RootRouter></RootRouter>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
