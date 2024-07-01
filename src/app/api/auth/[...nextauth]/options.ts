import CredentialsProvider from "next-auth/providers/credentials";

import { cookies } from "next/headers";

const authOptions: any = {
  callbacks: {
    async signIn({ user, account }: any) {
      return { user, account };
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch(`https://dejavu.lifestyle/api/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            throw new Error("Failed to login");
          }

          const user = await res.json();

          if (user.status === true) {
            //
            return user;
            // parseSetCookie("cartItems", item);
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],

  secret: "https://rollie-alpha.vercel.app/",
};

export default authOptions;
