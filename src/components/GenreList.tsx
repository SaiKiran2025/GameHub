import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <>
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </>
  );
};

export default GenreList;
