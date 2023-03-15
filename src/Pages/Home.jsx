import { React, useEffect, useState } from "react";
import Header from "../Components/Common/Header";

import { categoryMovies } from "../Services/Api";
import { NOWPLAYING_API_URL } from "../Constants/Constant";

import { Box } from "@mui/material";
import Banner from "../Components/Banner";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let response = await categoryMovies(NOWPLAYING_API_URL);
      setMovies(response.results);
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <Box>
        <Banner movies={movies} />
      </Box>
    </>
  );
};

export default Home;
