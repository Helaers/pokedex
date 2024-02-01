import { useEffect, useState } from "react";

type PokemonCardProps = {
  name: string;
};

const PokemonCard = ({ name }: PokemonCardProps) => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    async function fetchPokemonDetails() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setImageUrl(data.sprites.front_default);
    }

    fetchPokemonDetails();
  }, [name]);

  return (
    <div className="pokemon">
      <h2 className="pokemon__name">{name}</h2>
      <img className="pokemon__image" src={imageUrl} alt={name} />
    </div>
  );
};

export default PokemonCard;
