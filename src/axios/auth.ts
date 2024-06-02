import { instance } from "~/axios/instance";

export const login = async (email: string, password: string) => {
  const res = await instance.post<{
    access_token: string;
  }>("/login", {
    email,
    password,
  });

  return res.data;
};
