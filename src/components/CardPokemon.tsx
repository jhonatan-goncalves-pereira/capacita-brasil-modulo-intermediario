import { useFavorites } from "../hooks/useFavorites";

type Props = { name: string; image: string };

export default function CardPokemon({ name, image }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(name);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition hover:scale-105">
      <img src={image} alt={name} className="h-24 w-24 object-contain" />
      <h3 className="capitalize font-bold text-lg mt-2">{name}</h3>
      <button 
        className={`mt-2 px-4 py-2 rounded-lg text-primary ${
          isFavorite ? "bg-red-500" : "bg-gray-400"
        } hover:opacity-80 transition`}
        onClick={() => toggleFavorite(name)}
      >
        {isFavorite ? "Remover" : "Favoritar"}
      </button>
    </div>
  );
}
