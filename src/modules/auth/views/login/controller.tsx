import { CreateLoginRequest } from "@/modules/auth/mutations/types";
import { FormSubmitHandler, useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { createLoginSchema } from "@/modules/auth/mutations/schemas/create-login.schema";
import { useAuthMutation } from "@/modules/auth/mutations/auth.mutation";
import { useAuthContext } from "@/modules/auth/context/auth.context";
import { useState } from "react";
import { Exception } from "@/modules/shared/models/error.model";

export function useController() {
  const form = useForm<CreateLoginRequest>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(createLoginSchema),
  });

  const { createLoginMutation } = useAuthMutation();
  const { setAuthData, isAuthenticated } = useAuthContext();

  const [error, setError] = useState<Exception>();

  const handleFormSubmit: FormSubmitHandler<CreateLoginRequest> = async ({
    data,
  }) => {
    try {
      setError(undefined);
      const response = await createLoginMutation.mutateAsync(data);
      setAuthData(response.data);
    } catch (error: any) {
      setError(Exception.fromAxiosError(error));
    }
  };

  const isLoading = createLoginMutation.isPending;

  return { isLoading, form, handleFormSubmit, isAuthenticated, error };
}
