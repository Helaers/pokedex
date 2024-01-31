import { PokemonListItem } from "../types/types";

type PokemonListProps = {
  list: PokemonListItem[];
};

const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <div className="pokemon-list">
      {list.map((pokemon, index) => (
        <pre key={index}>{JSON.stringify(pokemon)}</pre>
      ))}
    </div>
  );
};

export default PokemonList;
