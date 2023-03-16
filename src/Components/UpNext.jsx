import React from "react";

import { Box, Typography, styled } from "@mui/material";

const Component = styled(Box)`
  width: 40%;
  & > p {
    color: #f5c518;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  margin: 10px;
  & > p {
    color: white;
    font-size: 18px;
    margin-left: 20px;
  }
`;

const Poster = styled("img")({
  width: "88px",
});

const UpNext = ({ movies }) => {
  return (
    <Component>
      <Typography>Up Next</Typography>
      {movies.slice(0, 3).map((movie) => (
        <Wrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="Poster"
          />
          <Typography>{movie.original_title}</Typography>
        </Wrapper>
      ))}
    </Component>
  );
};

export default UpNext;
