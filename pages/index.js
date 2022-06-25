import Head from "next/head";
import { Container } from "react-bootstrap";
import HomeNavbar from "../components/navbar";
import Footer from "../components/footer";
import SliderPanner from "../components/slider";
export default function Home() {
  return (
    <>
      <Head>
        <title>CocktailsDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="p-0" fluid>
        <HomeNavbar />
        <SliderPanner />
      </Container>
    </>
  );
}
