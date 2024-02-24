import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
const authOptions: any = {
  callbacks: {
    async signIn({ user, account }: any) {
      return { user, account };
    },
  },
  providers: [
    GitHubProvider({
      clientId: "Iv1.fa75aff34d44c845",
      clientSecret: "5345e79a0928b7316c0b76ebce029c46e6ee99df",
    }),
    GoogleProvider({
      clientId:
        "691368152129-94ti7ndijjmgb67jra885q3ncts385jg.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // const res = await fetch(`https://getmicrojobs.com/api/login`, {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();
        // if (user.status == true) {
        //   return user;
        // }
        // return null;
        //  gpt

        try {
          const res = await fetch(`https://getmicrojobs.com/api/login`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
            throw new Error("Failed to login");
          }

          const user = await res.json();

          if (user.status === true) {
            return user;
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
};

export default authOptions;
