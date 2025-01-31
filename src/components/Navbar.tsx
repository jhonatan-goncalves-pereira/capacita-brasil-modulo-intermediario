import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-500 p-4 text-white flex justify-between">
      <Link to="/" className="text-xl font-bold">PokéApp</Link>
      <Link to="/favorites" className="text-lg">Favoritos</Link>
    </nav>
  );
}
