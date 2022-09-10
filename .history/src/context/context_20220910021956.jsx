import { createContext, useState, useEffect } from "react";
import { getCharacter } from "../api/api";

const Context = createContext();

function ContexProviderWrapper(props) {
  const [data, setData] = useState(false);
  const [characters, setCharacters] = useState(false);

  if (data.info) {
    console.log(data.info.pages);
  }
  const arrayPaginas = [];
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharacter();
      setData(response);
      setCharacters(response.results);
    };
    fetchCharacter().catch(console.error());
  }, []);
  return (
    <Context.Provider value={{ data, setData, characters }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContexProviderWrapper, Context };
