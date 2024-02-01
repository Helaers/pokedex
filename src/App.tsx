import { useEffect, useRef, useState } from "react";
import pokemonLogo from "./assets/pokemon.svg";
import "./styles/App.css";
import "./styles/pokemon.css";

import { PokemonListDto, PokemonListItem } from "./types/types";

import PokemonList from "./components/PokemonList";
import PokemonSearch from "./components/PokemonSearch";

function App() {
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [fetchUrl, setFetchUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [searchTerm, setSearchTerm] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  const isFetching = useRef(false);
  useEffect(() => {
    async function fetchData() {
      if (!isFetching.current) {
        isFetching.current = true;
        const response = await fetch(fetchUrl);
        const data = (await response.json()) as PokemonListDto;

        setPokemonList((prevState) => [...prevState, ...data.results]);
        setNextUrl(data.next);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const onSearch = (query: string) => {
    setSearchTerm(query);
  };

  const loadMore = () => {
    isFetching.current = false;
    setFetchUrl(nextUrl);
  };
  return (
    <>
      <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
      <PokemonSearch onChange={onSearch} />
      <PokemonList list={filteredPokemon} />
      <button onClick={loadMore}>Load more</button>
    </>
  );
}

export default App;
