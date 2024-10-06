
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            authorization: {
                params: {
                    redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
                },
            },
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log('authorize credentials', credentials);

                const user = { id: "1", name: "User", email: "user@example.com" };

                if (credentials?.username === "admin" && credentials?.password === "password") {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/',
    },
    callbacks: {
        async signIn({ account, profile }) {
            if (account && account.provider === "google") {
                console.log(account, profile);
                return true
            }

            console.log('callbacks signIn', account, profile);

            return true // Do different verification for other providers that don't have `email_verified`
        },
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            // session.access_token = token.access_token as string;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
