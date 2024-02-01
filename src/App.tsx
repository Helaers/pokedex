import { useEffect, useState } from "react";
import pokemonLogo from "./assets/pokemon.svg";
import "./styles/App.css";
import "./styles/pokemon.css";

import { PokemonListItem } from "./types/types";

import PokemonList from "./components/PokemonList";
import PokemonSearch from "./components/PokemonSearch";

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const data = await response.json();

      setPokemonList(data.results);
    }
    fetchData();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSearch = (query: string) => {
    setSearchTerm(query);
  };

  return (
    <>
      <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
      <PokemonSearch onChange={onSearch} />
      <PokemonList list={filteredPokemon} />
    </>
  );
}

export default App;
