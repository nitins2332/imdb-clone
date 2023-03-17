import { Box, List, ListItem, Typography, styled } from "@mui/material";
import { Star } from "@mui/icons-material";
import React from "react";

const Banner = styled("img")({
  width: 47,
});

const Container = styled(List)`
  display: flex;
`;

const ReleaseDate = styled(Typography)`
  padding-left: 10px;
`;

const MoviesList = ({ movies }) => {
  return (
    <Box>
      <Typography>MovieList</Typography>
      {movies.map((movie) => (
        <Container>
          <ListItem>
            <Banner
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </ListItem>
          <ListItem>
            <Typography>{movie.original_title}</Typography>
          </ListItem>
          <ListItem>
            <Star color="warning" />
            <Typography>{movie.vote_average}</Typography>
          </ListItem>
          <ListItem>
            <Typography>{`Release Date :`}</Typography>
            <ReleaseDate>{movie.release_date}</ReleaseDate>
          </ListItem>
        </Container>
      ))}
    </Box>
  );
};

export default MoviesList;
