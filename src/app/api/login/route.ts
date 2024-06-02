import { instance } from "~/app/api/instance";

export async function POST(request: Request) {
  const data = (await request.json()) as { email: string; password: string };

  try {
    const res = await login(data.email, data.password);
    return Response.json(res);
  } catch (error) {
    return Response.json(
      { message: "Wrong email or password" },
      { status: 401 },
    );
  }
}

const login = async (email: string, password: string) => {
  const res = await instance.post<{
    access_token: string;
  }>("/token", {
    grant_type: "password",
    username: email,
    password,
  });

  return res.data;
};