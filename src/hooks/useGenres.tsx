import useData from "../hooks/useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  return useData<Genre>("/genres");
};

export default useGenres;
