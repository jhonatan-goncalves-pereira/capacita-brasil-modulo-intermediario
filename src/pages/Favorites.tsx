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
    <div className="container p-5">
      <h2 className="h3 mb-4">Favoritos</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {pokemons.map((p) => (
          <div key={p.id} className="col">
            <CardPokemon name={p.name} image={p.sprites.front_default} />
          </div>
        ))}
      </div>
    </div>
  );
}
