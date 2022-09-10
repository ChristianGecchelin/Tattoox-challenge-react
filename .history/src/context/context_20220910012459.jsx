import { createContext, useState, useEffect } from "react";
import { getCharacter } from "../api/api";

const Context = createContext();

function ContexProviderWrapper(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await getCharacter();
      setData(response);
    };
    fetchCharacter().catch(console.error());
  }, []);

  return (
    <Context.Provider value={{ data, setData }}>
      {props.children}
    </Context.Provider>
  );
}
export { ContexProviderWrapper, Context };
