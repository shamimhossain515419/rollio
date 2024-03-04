import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: any = {
  callbacks: {
    async signIn({ user, account }: any) {
      return { user, account };
    },
  },
  session: {
    maxAge: 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password, name } = credentials;
        const user = { password, email, name };
        return user;
      },
    }),
  ],

  secret: "https://rollie-alpha.vercel.app/",
};

export default authOptions;
