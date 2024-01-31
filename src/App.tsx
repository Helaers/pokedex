import { useEffect, useState } from "react";
import pokemonLogo from "./assets/pokemon.svg";
import "./styles/App.css";
import "./styles/pokemon.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

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
      <div className="pokemon-list">
        {pokemonList.map((pokemon, index) => (
          <pre key={index}>{JSON.stringify(pokemon)}</pre>
        ))}
      </div>
    </>
  );
}

export default App;
