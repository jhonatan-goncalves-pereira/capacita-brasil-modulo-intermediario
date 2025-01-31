import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 fw-bold">PokéApp</Link>
        <div className="ml-auto">
          <Link to="/favorites" className="btn btn-light">Favoritos</Link>
        </div>
      </div>
    </nav>
  );
}
