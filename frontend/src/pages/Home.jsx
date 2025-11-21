import { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function getData() {
      const url = "/api/";
      try {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
        setData(text);
      } catch (error) {
        console.error(error.message);
        setData(error.message);
      }
    }
    getData();
  }, []);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Home</h1>
      <div>{data ? data : "Loading..."}</div>
    </div>
  );
}

export default Home;
