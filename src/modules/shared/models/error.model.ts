import axios, { Axios, AxiosError } from "axios";

export interface ExceptionModel {
  code: string;
  message: string;
}

export interface Exception extends ExceptionModel {}

export class Exception {
  constructor(exception: ExceptionModel) {
    this.code = exception.code;
    this.message = exception.message;
  }

  public static fromAxiosError = (axiosError: AxiosError<any>) => {
    const message = axiosError.response?.data?.detail;

    return new Exception({
      code: axiosError.status?.toString() ?? "-1",
      message,
    });
  };
}
