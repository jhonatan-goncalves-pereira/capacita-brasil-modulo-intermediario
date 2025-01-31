import { useFavorites } from "../hooks/useFavorites";

type Props = { name: string; image: string };

export default function CardPokemon({ name, image }: Props) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(name);

  return (
    <div className="border p-4 rounded-lg text-center">
      <img src={image} alt={name} className="h-20 mx-auto" />
      <h3 className="capitalize font-bold">{name}</h3>
      <button
        className={`mt-2 px-4 py-2 ${isFavorite ? "bg-red-500" : "bg-gray-300"}`}
        onClick={() => toggleFavorite(name)}
      >
        {isFavorite ? "Remover" : "Favoritar"}
      </button>
    </div>
  );
}
