import Benefits from "../src/components/Benefits/Benefits";
import Header from "../src/components/Header/Header";
import client from "../src/sanity";

export default function Home({ header, benefits }) {
  return (
    <>
      <Header header={header} />
      <main>
        <Benefits benefits={benefits} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const header = await client.fetch(`*[_type == "header"][0]`);
  const benefits = await client.fetch(`*[_type == "benefits"][0..2]`);

  return {
    props: {
      header,
      benefits,
    },
  };
};

