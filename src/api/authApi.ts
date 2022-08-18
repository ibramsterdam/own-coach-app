import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { User } from "@Models/userModel";
import { API_BASE } from "@env";

type ApiResponse = {
  user?: User;
};

export type LoginResponse = ApiResponse & {
  message: "Login Success" | "Login Failed";
};

export const signIn = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  const config: AxiosRequestConfig = {
    method: "post",
    url: `${API_BASE}/api/auth/signin`,
    data: {
      email: credentials.email,
      password: credentials.password,
    },
  };

  return axios(config)
    .then((response: AxiosResponse) => {
      console.log("Cookie", response.data.access_token);
      return {
        message: "Login Success",
      } as LoginResponse;
    })
    .catch(() => {
      return {
        message: "Login Failed",
      } as LoginResponse;
    });
};
