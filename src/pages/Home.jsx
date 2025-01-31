import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "../components/PokemonCard";

function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(response => setPokemons(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Lista de Pokémon</h1>
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
}

export default Home;
