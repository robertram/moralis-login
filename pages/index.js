import Head from 'next/head'
import { Header } from "../src/components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
