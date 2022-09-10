import { createContext, useState, useEffect } from "react";
import { getCharacter } from "../api/api";

const Context = createContext();

function ContexProviderWrapper(props) {
  const [data, setData] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [page, setPage] = useState(1);

  const pagesArray = [];
  if (data.info) {
    for (let i = 0; i < data.info.pages; i++) {
      pagesArray.push(i + 1);
    }
  }

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharacter(page);
      setData(response);
      setCharacters(response.results);
    };
    fetchCharacter().catch(console.error());
  }, [page]);
  return (
    <Context.Provider
      value={{ data, setData, characters, pagesArray, setPage }}
    >
      {props.children}
    </Context.Provider>
  );
}
export { ContexProviderWrapper, Context };
