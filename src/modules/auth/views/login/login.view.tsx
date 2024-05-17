import React, { useEffect } from "react";
import b2bitLogo from "assets/icons/b2bit-logo.png";
import { Card, Button, Input, Label } from "styles/layout";
import { useController } from "./controller";
import { Controller, Form } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginView: React.FC = () => {
  const { form, handleFormSubmit, isLoading, isAuthenticated } =
    useController();

  const navigate = useNavigate();
  useEffect(() => {
    isAuthenticated && navigate({ pathname: "/profile" }, { replace: true });
  }, [isAuthenticated]);

  return (
    <main className="bg-base-200 h-screen w-screen flex items-center justify-center">
      <Card>
        <img src={b2bitLogo} className="mx-6"></img>

        <div className="mt-10"></div>
        <Form control={form.control} onSubmit={handleFormSubmit}>
          <Controller
            control={form.control}
            name="email"
            render={({ field, fieldState }) => (
              <Input
                label={<Label>E-mail</Label>}
                placeholder="@gmail.com"
                type="text"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              ></Input>
            )}
          />

          <div className="mt-4"></div>

          <Controller
            control={form.control}
            name="password"
            render={({ field, fieldState }) => (
              <Input
                label={<Label>Password</Label>}
                placeholder="********"
                type="password"
                value={field.value}
                onChange={field.onChange}
                error={fieldState.error?.message}
              ></Input>
            )}
          />

          <Button type="submit" className="w-full mt-4" text="Sign In"></Button>
        </Form>
      </Card>
    </main>
  );
};
