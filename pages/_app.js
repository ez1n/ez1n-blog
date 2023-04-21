import '@/styles/globals.css'
import Navbar from "@/components/organism/Navbar/Navbar";
import Head from "next/head";

export default function App({Component, pageProps}) {
  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>ez1n's Blog</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}
