import { useFavorites } from "../hooks/useFavorites";
import { useEffect, useState } from "react";
import { getPokemonDetails } from "../api/pokeApi";
import CardPokemon from "../components/CardPokemon";

export default function Favorites() {
  const { favorites } = useFavorites();
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    Promise.all(favorites.map((name) => getPokemonDetails(name))).then(setPokemons);
  }, [favorites]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Favoritos</h2>
      <div className="grid grid-cols-2 gap-4">
        {pokemons.map((p) => (
          <CardPokemon key={p.id} name={p.name} image={p.sprites.front_default} />
        ))}
      </div>
    </div>
  );
}
