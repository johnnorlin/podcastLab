"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import React from "react";
import { Login } from "../buttons/Login";
import { Logout } from "../buttons/Logout";
import { Signup } from "../buttons/Signup";
export const Navbar = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <span className="w-full">
        <nav className="w-full flex justify-end ">
          <div className="h-[77.78px]"></div>
        </nav>
      </span>
    );
  }
  return (
    <span className="w-full flex flex-row place-items-center gap-2">
      <div className="text-4xl">Podcast </div>{" "}
      <div className="text-4xl">Lab</div>
      <Image
        src="/recording logo.png"
        alt="record logo"
        height="77"
        width="77"
        className="ml-2"
      ></Image>
      <nav className="w-full flex justify-end">
        {!user && (
          <>
            <Signup />
            <Login />
          </>
        )}
        {user && (
          <>
            <Logout />
          </>
        )}
      </nav>
    </span>
  );
};
