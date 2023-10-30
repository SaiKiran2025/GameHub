import { useEffect, useState } from "react";
import apiCleint from "../services/api-cleint";
import { Text } from "@chakra-ui/react";

interface games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiCleint
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
