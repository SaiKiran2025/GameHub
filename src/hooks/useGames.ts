import { useEffect, useState } from "react";
import apiCleint from "../services/api-cleint";
import { CanceledError } from "axios";

interface games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: games[];
}

const useGames = () => {
  const [games, setGames] = useState<games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiCleint
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
