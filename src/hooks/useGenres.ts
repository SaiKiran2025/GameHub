import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genres, error: null, isLoading: false }); //this object is returned so not to disturb the structure of the consumer of this hook

export default useGenres;
