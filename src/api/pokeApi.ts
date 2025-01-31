import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (limit = 20) => {
  const response = await axios.get(`${API_URL}?limit=${limit}`);
  return response.data.results;
};

export const getPokemonDetails = async (name: string) => {
  const response = await axios.get(`${API_URL}/${name}`);
  return response.data;
};
