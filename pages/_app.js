import '@/styles/globals.css'
import Navbar from "@/components/organism/Navbar/Navbar";
import Head from "next/head";
import Fab from "@/components/atoms/Fab/Fab";

export default function App({Component, pageProps}) {
  const clickFab = () => {
    console.log("click")
  }

  return (
    <>
      <Head>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>ez1n's Blog</title>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Fab onClick={clickFab}/>
    </>
  )
}
