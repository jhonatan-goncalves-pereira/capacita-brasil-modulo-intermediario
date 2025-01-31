import { useEffect, useState } from "react";
import axios from "axios";


function PokemonCard({ name, url }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => setPokemonData(response.data))
      .catch(error => console.error(error));
  }, [url]);

  return (
    <div className="col-md-4">
      <div className="card mb-4">
        {pokemonData && (
          <>
            <img src={pokemonData.sprites.front_default} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  };
  
export default PokemonCard;