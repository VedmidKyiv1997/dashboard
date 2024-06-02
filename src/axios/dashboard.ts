import { instance, getToken } from "~/axios/instance";
import { type DashboardResT } from "~/types";

export const getDashboard = async (page = 1) => {
  const res = await instance.get<DashboardResT>("/dashboard", {
    params: {
      page,
      size: 10,
    },
    headers: {
      Authorization: getToken(),
    },
  });

  return res.data;
};
