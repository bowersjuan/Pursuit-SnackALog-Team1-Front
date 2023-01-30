import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Snack App</h1>

      <Link to="/" id="home">
        Home
      </Link>
      <Link to="/snacks" id="items">
        Snacks
      </Link>
      <Link to="/snacks/new">New Snack</Link>
    </nav>
  );
};

export default NavBar;