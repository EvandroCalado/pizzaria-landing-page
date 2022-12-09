import Benefits from "../src/components/Benefits/Benefits";
import Cardapio from "../src/components/Cardapio/Cardapio";
import Header from "../src/components/Header/Header";
import ImageText from "../src/components/imageText/ImageText";
import Menu from "../src/components/Menu/Menu";
import Reviews from "../src/components/Reviews/Reviews";
import client from "../src/sanity";

export default function Home({ header, benefits, about, cardapio, reviews, location }) {
  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText data={about} />
        <Cardapio cardapio={cardapio} />
        <Reviews reviews={reviews} />
        <ImageText data={location} />
        <Menu />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);
  const about = await client.fetch(`*[_type == "about"][0]`);
  const cardapio = await client.fetch(`*[_type == "cardapio"][0..3]`);
  const reviews = await client.fetch(`*[_type == "reviews"][0..2]`);
  const location = await client.fetch(`*[_type == "location"][0]`);

  return {
    props: {
      header,
      benefits,
      about,
      cardapio,
      reviews,
      location,
    },
  };
};

