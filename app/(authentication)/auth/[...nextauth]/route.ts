import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signInWithCredentials } from "@/utils/auth/authService";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";

interface CustomUser extends User {
  id: string;
}


interface CustomSession extends Session {
  user: CustomUser;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        try {
          const user = await signInWithCredentials(credentials.username, credentials.password);
          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              // Add other user data as needed
            };
          }
          return null;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/", // Redirect here after sign-in
  },
  callbacks: {
    async session({ session, token }) {
      if (session && token) {
        // Ensure `token` contains user data
        session.user = {
          id: token.sub as string || "", // Make sure this is set correctly
          name: token.name as string || "",
          email: token.email as string || "",
        } as CustomUser;
      }
      return session as CustomSession;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.name = user.name;
        token.email = user.email;
        // Add other user data if needed
      }
      return token as JWT;
    },
  },
};

export default NextAuth(authOptions);
