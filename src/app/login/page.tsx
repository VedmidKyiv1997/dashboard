"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";
import { login } from "~/axios/auth";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { TokenStorageContext } from "~/context/tokenContext";

const LoginPage = () => {
  const ctx = useContext(TokenStorageContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (ctx?.token) {
      router.replace("/");
    }
  }, [ctx?.token, router]);

  const handleSubmit = async () => {
    if (!email || !password) return;
    try {
      toast.loading("Logging in...", { id: "login" });
      const data = await login(email, password);
      ctx?.setAccessToken(data.access_token);
      toast.dismiss("login");
      toast.success("Logged in");
      router.replace("/");
    } catch (error) {
      toast.dismiss("login");
      toast.error("Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex w-96 flex-col gap-4 rounded-md border-2 bg-white p-6 shadow-lg">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button onClick={handleSubmit}>Login</Button>
      </div>
    </div>
  );
};

export default LoginPage;
