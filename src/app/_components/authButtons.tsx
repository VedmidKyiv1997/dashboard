"use client";

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { TokenStorageContext } from "~/context/tokenContext";

export default function AuthButtons() {
  const ctx = useContext(TokenStorageContext);

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (ctx?.token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [ctx?.token]);

  return loggedIn ? (
    <button className="btn btn-primary" onClick={ctx?.removeTokens}>
      Logout
    </button>
  ) : (
    <Link href="/login">
      <button className="btn btn-primary">Login</button>
    </Link>
  );
}
