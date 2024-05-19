import { AxiosInstance } from "axios";

export function mockApi(mockedApi: AxiosInstance) {
  return jest.mock("@/modules/api", () => ({
    api: mockedApi,
  }));
}
