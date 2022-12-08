import { useEffect, useState } from "react";
import Header from "../src/components/Header/Header";

export default function Home() {
  const [data, setData] = useState([]);

  let PROJECT_ID = "z8i4mb76";
  let DATASET = "production";
  let QUERY = encodeURIComponent('*[_type == "header"]');

  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

  const sanityFetch = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data.result[0]);
    setData(data.result[0]);
  };

  useEffect(() => {
    sanityFetch();
  }, []);

  return (
    <main>
      <Header header={data} />
    </main>
  );
}

