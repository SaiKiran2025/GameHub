import { useEffect, useState } from "react";
import apiCleint from "../services/api-cleint";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreList {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiCleint
      .get<FetchGenreList>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { genres, error };
};

export default useGenres;
