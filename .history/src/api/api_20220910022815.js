import { useParams } from "react-router-dom";

export const getCharacter = async () => {
  const { page } = useParams();
  const fullData = await fetch(
    "https://rickandmortyapi.com/api/character?page=1"
  );
  return fullData.json();
};
