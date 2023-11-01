import React from "react";
import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </>
  );
};

export default GenreList;
