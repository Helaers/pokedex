import { useEffect, useState, ChangeEvent } from "react";
import pokemonLogo from "./assets/pokemon.svg";
import "./App.css";

import Pokemon from "./components/Pokemon";

type PokemonListItem = {
	name: string;
	url: string;
};

function App() {
	const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
	// Extra
	const [searchTerm, setSearchTerm] = useState("");
	// End extra

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon?limit=151"
			);
			const data = await response.json();

			setPokemonList(data.results);
		}
		fetchData();
	}, []);

	// Extra
	const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const filteredPokemon = pokemonList.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	// End extra

	return (
		<>
			<img src={pokemonLogo} className="logo" alt="Pokemon logo" />
			{/* Extra */}
			<input
				type="text"
				placeholder="Search Pokémon"
				value={searchTerm}
				onChange={onSearch}
				className="search-input"
			/>
			{/* End extra */}
			<div className="pokemon-list">
				{/* pokemonList */}
				{filteredPokemon.map((pokemon, index) => (
					<Pokemon key={index} name={pokemon.name} />
				))}
			</div>
		</>
	);
}

export default App;
