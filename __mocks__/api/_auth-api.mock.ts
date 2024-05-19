import axios, { AxiosResponse } from "axios";
import { mockApi } from "./_api.mock";

import responses from "../api/responses/_auth.responses.json";
import { CreateLoginRequest } from "@/modules/auth/mutations/types";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

mockedAxios.post.mockImplementation(
  async (url, d): Promise<AxiosResponse | undefined> => {
    const data: CreateLoginRequest = d as any;

    switch (url) {
      case "/auth/login/":
        if (
          data.email !== "cliente@youdrive.com" ||
          data.password !== "password"
        ) {
          throw {
            data: {
              detail: "Invalid credentials",
            },
            status: 401,
            statusText: "Unauthorized",
            headers: {},
            config: {} as any,
          };
        }

        return {
          data: responses[url],
          status: 200,
          statusText: "OK",
          headers: {},
          config: {} as any,
        };

      default:
        return undefined;
    }
  }
);

mockApi(mockedAxios);
