import { ChangeEvent } from "react";

type PokemonSearchProps = {
  onChange: (string: string) => void;
};

function PokemonSearch({ onChange }: PokemonSearchProps) {
  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input className="search-input" type="text" placeholder="Search Pokémon" onChange={onSearch} />;
}

export default PokemonSearch;
