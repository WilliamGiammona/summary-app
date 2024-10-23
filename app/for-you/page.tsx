"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import NavBar from "../components/NavBar";

export default function ForYou() {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!loading && !user) {
      redirect("/");
    }
  }, [user, loading]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold">
          Welcome{user?.email ? `, ${user.email}` : ""}!
        </h1>
      </div>
    </>
  );
}
