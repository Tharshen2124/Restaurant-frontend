import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Logout({ token }: any) {
  const router = useRouter();

  const logoutUser = async (e: any) => {
    document.cookie = "token=";
    e.preventDefault();
    console.log("hello this is the token :" + token);
    const response = await fetch("http://localhost/api/v1/logout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    sessionStorage.clear();

    const data = await response.json();
    console.log(data);
    console.log(sessionStorage);

    router.reload();
  };

  return (
    <div className="flex items-center gap-3">
      <Link
        onClick={logoutUser}
        href="/logout"
        className="hover:text-cyan-500 transition-colors"
      >
        Logout
      </Link>
    </div>
  );
}
