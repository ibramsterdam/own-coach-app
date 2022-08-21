import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { User } from "@Models/userModel";
import { API_BASE } from "@env";
import { getValue, saveValue, removeValue } from "@Utils/expoSecureStore";

type ApiResponse = {
  user?: User;
};

export type SignInResponse = ApiResponse & {
  message: "SignIn Success" | "SignIn Failed";
};
export type SignUpResponse = ApiResponse & {
  message: "SignUp Success" | "SignUp Failed";
};

export type AuthMeResponse = ApiResponse & {
  message: "Auth me Success" | "Auth me Failed";
};

export const signIn = async (credentials: {
  email: string;
  password: string;
}): Promise<SignInResponse> => {
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
      saveValue(`BEARER_TOKEN`, `Bearer ${response.data.access_token}`);
      return {
        message: "SignIn Success",
      } as SignInResponse;
    })
    .catch((err) => {
      console.log("Err... This is catch Block of api", err);
      return {
        message: "SignIn Failed",
      } as SignInResponse;
    });
};

export const signUp = async (credentials: {
  email: string;
  password: string;
}): Promise<SignUpResponse> => {
  const config: AxiosRequestConfig = {
    method: "post",
    url: `${API_BASE}/api/auth/signup`,
    data: {
      email: credentials.email,
      password: credentials.password,
    },
  };

  return axios(config)
    .then((response: AxiosResponse) => {
      saveValue(`BEARER_TOKEN`, `Bearer ${response.data.access_token}`);
      return {
        message: "SignUp Success",
      } as SignUpResponse;
    })
    .catch((err) => {
      console.log("Err... This is catch Block of api Signup", err);
      return {
        message: "SignUp Failed",
      } as SignUpResponse;
    });
};

export const authMe = async (): Promise<AuthMeResponse> => {
  const BEARER_TOKEN = await getValue("BEARER_TOKEN");

  const config: AxiosRequestConfig = {
    method: "get",
    url: `${API_BASE}/api/auth/me`,
    headers: {
      Authorization: BEARER_TOKEN,
    },
  };
  console.log("Waiting 2 seconds");
  // await delay(2000);
  console.log("Done");

  return axios(config)
    .then((response: AxiosResponse) => {
      return {
        // user: response.data,
        message: "Auth me Success",
      } as AuthMeResponse;
    })
    .catch(() => {
      return {
        message: "Auth me Failed",
      } as AuthMeResponse;
    });
};
