import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

type options<P> = UseMutationOptions<
  AxiosResponse<any, any>,
  AxiosError<unknown, any>,
  P,
  unknown
>;

export const useAxiosMutation = <P, R = any>(options: options<P>) =>
  useMutation<AxiosResponse<R>, AxiosError, P>(options);
