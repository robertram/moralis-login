import Head from 'next/head'
import { Hero } from "../src/components/hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
}
