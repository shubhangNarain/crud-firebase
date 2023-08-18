
import { AuthUserProvider } from "@/firebase/auth";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>SNVList</title>
            </Head>
            <AuthUserProvider>
                <Component {...pageProps} />
            </AuthUserProvider>
        </>
    );
}
