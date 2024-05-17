import { AxiosInstance } from "axios";

export const withAuthInterseptors = (api: AxiosInstance, token: string) => {
  return api.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });
};
