import { api } from "modules/api";
import { CreateLoginRequest, CreateLoginResponse } from "./types";
import { useAxiosMutation } from "hooks/use-axios-mutation";

export const useAuthMutation = () => {
  const createLoginMutation = useAxiosMutation<
    CreateLoginRequest,
    CreateLoginResponse
  >({
    mutationFn: async (data) => {
      const response = await api.post("/auth/login/", data);
      return response;
    },
  });

  return { createLoginMutation };
};
