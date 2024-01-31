import { useEffect, useState } from "react";
import pokemonLogo from "./assets/pokemon.svg";
import "./styles/App.css";
import "./styles/pokemon.css";

import { PokemonListItem } from "./types/types";

import PokemonList from "./components/PokemonList";

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();

      setPokemonList(data.results);
    }
    fetchData();
  }, []);

  return (
    <>
      <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
      <PokemonList list={pokemonList} />
    </>
  );
}

export default App;
