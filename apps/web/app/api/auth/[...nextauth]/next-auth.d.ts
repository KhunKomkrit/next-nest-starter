/* eslint-disable no-unused-vars */
import "next-auth";

declare module "next-auth" {
  interface Session {
    access_token?: string;
  }

  interface JWT {
    access_token?: string;
  }
}