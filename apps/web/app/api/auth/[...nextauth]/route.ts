
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
                username: { label: "username", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {

                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                const raw = JSON.stringify({
                    "username": credentials?.username,
                    "password": credentials?.password
                });
                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw
                };
                const resLogin = await fetch(`${process.env.BASE_URL_API}/auth/login`, requestOptions)

                if (resLogin.ok) {
                    const userProfile = await resLogin.json()
                    return userProfile
                } else {
                    return null
                }
            }
        })
    ],
    pages: {
        signIn: '/',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account && account.provider === "google") {
                console.log(account, profile);
                return true
            }

            console.log('callbacks signIn', user, account, profile, email, credentials);

            return true // Do different verification for other providers that don't have `email_verified`
        },
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.access_token = token.access_token as string;
            return session;
        },
    },
});

export { handler as GET, handler as POST };
