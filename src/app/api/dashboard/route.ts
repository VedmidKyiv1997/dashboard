import { type NextRequest } from "next/server";
import { instance } from "~/app/api/instance";
import { type DashboardResT } from "~/types";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") ?? "1";
  const size = searchParams.get("size") ?? "10";
  const accessToken = request.headers.get("Authorization");

  if (!accessToken) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const res = await getDashboard(accessToken, {
      page: Number(page),
      size: Number(size),
    });
    return Response.json(res);
  } catch (error) {
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}

const getDashboard = async (
  accessToken: string,
  params: { page: number; size: number },
) => {
  const res = await instance.get<DashboardResT>("/billing/products", {
    headers: {
      Authorization: accessToken,
    },
    params,
  });

  return res.data;
};
