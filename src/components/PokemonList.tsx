import { PokemonListItem } from "../types/types";
import PokemonCard from "./PokemonCard.tsx";

type PokemonListProps = {
  list: PokemonListItem[];
};

const PokemonList = ({ list }: PokemonListProps) => {
  return (
    <div className="pokemon-list">
      {list.map((pokemon, index) => (
        <PokemonCard key={index} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonList;
