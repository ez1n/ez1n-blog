import '@/styles/globals.css'
import NavBar from "@/components/ui/header/NavBar";
import Head from "next/head";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>ez1n's Blog</title>
      </Head>
      <NavBar/>
      <Component {...pageProps} />
    </>
  )
}
