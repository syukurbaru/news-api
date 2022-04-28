import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
// import useStore from "zustand";

import ArticleList from "./components/ArticleList";
import Navbar from "./components/Navbar";
import axios from "axios";
// import googleNews from "./stores/googleNews";

function App() {
  const [data, setData] = useState([]);
  let APIKey = process.env.REACT_APP_API_KEY;

  // const query = useStore((state) => state.query);
  // console.log(query, "query");

  useEffect(() => {
    axios
      .get(
        `/everything?q=mudik&from=2022-03-28&sortBy=publishedAt&apiKey=${APIKey}`
      )
      .then((data) => {
        // console.log(data);
        setData(data.data?.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [APIKey]);

  // console.log(data, "data");

  // Google News
  // useEffect(() => {
  //   setData(googleNews?.articles);
  // }, []);

  return (
    <div className="container">
      <Navbar />
      <Flex flexWrap="wrap">
        <ArticleList data={data} />
        {/* <ArticleList data={data} /> */}
      </Flex>
    </div>
  );
}

export default App;
