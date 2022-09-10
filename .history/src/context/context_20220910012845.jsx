import { createContext, useState, useEffect } from "react";
import { getCharacter } from "../api/api";

const Context = createContext();

function ContexProviderWrapper(props) {
  const [data, setData] = useState(false);
  const [character, setCharacter] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharacter();
      setData(response);
      setCharacter(response.results);
    };
    fetchCharacter().catch(console.error());
  }, []);
  console.log(character);
  return (
    <Context.Provider value={{ data, setData }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContexProviderWrapper, Context };
