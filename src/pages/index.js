import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Cards from "@/components/Cards";
import RandomItineraries from "@/components/RandomItineraries";
import { data } from "../../data";
import ListLocations from "@/components/ListLocations";

export default function Home() {
  return (
    <>
      <Head>
        <title>SeaAdventures</title>
        <meta name="description" content="SeaAdventures - Edgemony test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Cards data={data} />
        <RandomItineraries data={data} />
      </main>
    </>
  );
}
