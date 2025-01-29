import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Pokémon Cards</Link>
        <div>
          <Link className="nav-link" to="/cadastro">Cadastrar</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
