import Benefits from "../src/components/Benefits/Benefits";
import Cardapio from "../src/components/Cardapio/Cardapio";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import ImageText from "../src/components/imageText/ImageText";
import Menu from "../src/components/Menu/Menu";
import Navbar from "../src/components/Navbar/Navbar";
import Reviews from "../src/components/Reviews/Reviews";
import client from "../src/sanity";

export default function Home({
  header,
  benefits,
  about,
  cardapio,
  reviews,
  location,
  menu,
  logos,
  footer,
}) {
  return (
    <>
      <Navbar logos={logos} />
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
        <ImageText data={about} id="about" />
        <Cardapio cardapio={cardapio} />
        <Reviews reviews={reviews} />
        <ImageText data={location} id="location" />
        <Menu menu={menu} />
      </main>
      <Footer logos={logos} footer={footer} />
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
  const menu = await client.fetch(`*[_type == "menu"][0..4]`);
  const logos = await client.fetch(`*[_type == "logos"][0]`);
  const footer = await client.fetch(`*[_type == "footer"][0]`);

  return {
    props: {
      header,
      benefits,
      about,
      cardapio,
      reviews,
      location,
      menu,
      logos,
      footer,
    },
  };
};

