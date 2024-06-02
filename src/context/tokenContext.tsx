"use client";

import { useState, createContext } from "react";

export const TokenStorageContext = createContext<{
  token: string | null;
  setAccessToken: (value: string) => void;
  removeTokens: () => void;
} | null>(null);

export const TokenContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string | null>(() => {
    return typeof window !== "undefined"
      ? window.localStorage.getItem("access_token")
      : null;
  });

  const setAccessToken = (value: string) => {
    window.localStorage.setItem("access_token", value);
    setToken(value);
  };

  const removeTokens = () => {
    window.localStorage.clear();
    setToken(null);
  };

  return (
    <TokenStorageContext.Provider
      value={{
        token,
        setAccessToken,
        removeTokens,
      }}
    >
      {children}
    </TokenStorageContext.Provider>
  );
};
