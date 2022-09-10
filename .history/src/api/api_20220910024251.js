export const getCharacter = async (page) => {
  const fullData = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  return fullData.json();
};
