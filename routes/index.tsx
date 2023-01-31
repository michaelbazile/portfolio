import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import { Header } from "../components/Header.tsx";
import { Footer } from "../components/Footer.tsx";

const Home = () => {
  return (
    <>
      <Head>
        <title>Michael Bazile Portfolio</title>
      </Head>
      <div>
        <Header active="" />

        <Footer children />
      </div>
    </>
  );
};

export default Home;
