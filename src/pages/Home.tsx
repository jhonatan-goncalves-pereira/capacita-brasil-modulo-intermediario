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
    <div className="container mt-4">
      <h1 className="text-center text-primary">PokéApp</h1>
      <SearchBar onSearch={setSearch} />
      
      <div className="row mt-4">
        {pokemons
          .filter((p) => p.name.includes(search.toLowerCase()))
          .map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 mb-4">
              <CardPokemon name={p.name} image={p.sprites.front_default} />
            </div>
          ))}
      </div>
    </div>
  );
}
