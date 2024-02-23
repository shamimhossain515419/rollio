"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = ({ children, session }: any) => {
  return (
    <div>
      <SessionProvider session={session}>{children}</SessionProvider>
    </div >
  );
};

export default AuthProvider;
