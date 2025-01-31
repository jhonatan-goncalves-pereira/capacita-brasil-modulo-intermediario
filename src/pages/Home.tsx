import { useEffect, useState } from "react";
import { getPokemons, getPokemonDetails } from "../api/pokeApi";
import CardPokemon from "../components/CardPokemon";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPokemons().then(async (data) => {
      const details = await Promise.all(
        data.map((poke: any) => getPokemonDetails(poke.name))
      );
      setPokemons(details);
    });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <SearchBar onSearch={setSearch} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {pokemons
          .filter((p) => p.name.includes(search.toLowerCase()))
          .map((p) => (
            <CardPokemon key={p.id} name={p.name} image={p.sprites.front_default} />
          ))}
      </div>
    </div>
  );
}
