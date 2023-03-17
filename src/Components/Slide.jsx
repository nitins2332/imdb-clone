import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Box, styled, Typography } from "@mui/material";
import React from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const StyledBanner = styled("img")({
  width: "100%",
  marginTop: "20px",
});

const MovieTitle = styled(Typography)`
  color: #fff;
`;

const Slide = ({ movies }) => {
  return (
    <Box>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        slidesToSlide={1}
      >
        {movies.map((movie) => (
          <>
            <StyledBanner
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="banner"
            />
            <MovieTitle>{movie.original_title}</MovieTitle>
          </>
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
