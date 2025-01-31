type Props = { onSearch: (query: string) => void };

export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="🔎 Buscar Pokémon..."
      className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
