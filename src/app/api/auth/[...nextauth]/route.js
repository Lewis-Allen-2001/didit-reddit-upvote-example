import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { handlers } from "@/auth";

export const { auth, GET, POST } = NextAuth({ providers: [ GitHub ] })
