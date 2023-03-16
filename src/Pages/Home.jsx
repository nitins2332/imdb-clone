import { React, useEffect, useState } from "react";
import Header from "../Components/Common/Header";
import UpNext from "../Components/UpNext";

import { categoryMovies } from "../Services/Api";
import { NOWPLAYING_API_URL, TOPRATED_API_URL } from "../Constants/Constant";

import { Box, styled } from "@mui/material";
import Banner from "../Components/Banner";
import Slide from "../Components/Slide";

const Wrapper = styled(Box)`
  display: flex;
  padding: 20px 0;
`;

const Component = styled(Box)`
  padding: 0 115px !important;
`;

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
      <Component>
        <Wrapper>
          <Banner movies={movies} />
          <UpNext movies={movies} />
        </Wrapper>
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
        <Slide movies={movies} />
      </Component>
    </>
  );
};

export default Home;
