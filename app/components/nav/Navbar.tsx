"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
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
    <span className="w-full">
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
