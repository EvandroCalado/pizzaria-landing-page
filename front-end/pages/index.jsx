import Benefits from "../src/components/Benefits/Benefits";
import Cardapio from "../src/components/Cardapio/Cardapio";
import Header from "../src/components/Header/Header";
import ImageText from "../src/components/imageText/ImageText";
import client from "../src/sanity";

export default function Home({ header, benefits, about, cardapio }) {
  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText about={about} />
        <Cardapio cardapio={cardapio} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const cardapio = await client.fetch(`*[_type == "cardapio"][0..3]`);

  return {
    props: {
      header,
      benefits,
      about,
      cardapio,
    },
  };
};

