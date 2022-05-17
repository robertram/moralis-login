import Head from 'next/head'
import { Hero } from "../src/components/hero";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
}
