import { AxiosResponse } from "axios";
import { CreateLoginRequest } from "modules/auth/mutations/types";
import { FormSubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createLoginSchema } from "modules/auth/mutations/schemas/create-login.schema";
import { useAuthMutation } from "modules/auth/mutations/auth.mutation";
import { useAuthContext } from "modules/auth/context/auth.context";
import { useNavigate } from "react-router-dom";

export function useController() {
  const form = useForm<CreateLoginRequest>({
    defaultValues: {
      email: "cliente@youdrive.com",
      password: "password",
    },
    resolver: joiResolver(createLoginSchema),
  });

  const { createLoginMutation } = useAuthMutation();
  const { setAuthData, isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  const handleFormSubmit: FormSubmitHandler<CreateLoginRequest> = async ({
    data,
  }) => {
    const response = await createLoginMutation.mutateAsync(data);

    setAuthData(response.data);
  };

  const isLoading = createLoginMutation.isPending;

  return { isLoading, form, handleFormSubmit, isAuthenticated };
}
