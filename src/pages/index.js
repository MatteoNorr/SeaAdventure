import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import Cards from "@/components/Cards";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>SeaAdventures</title>
        <meta name="description" content="SeaAdventures - Edgemony test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Hero />
        <Cards data={data} />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const GET = await fetch("https://api.npoint.io/3bdcfffa021005254b6f");
  const data = await GET.json();

  return {
    props: {
      data,
    },
  };
}
