type Props = { onSearch: (query: string) => void };

export default function SearchBar({ onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Buscar Pokémon..."
      className="p-2 border rounded w-full"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
