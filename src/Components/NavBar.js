import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Pac a Snack!</h1>
      <Link to="/" id="home">
        Home
      </Link>
      <Link to="/snacks" id="items">
        Snacks
      </Link>
      <Link to="/snacks/new">Add Snack</Link>
    </nav>
  );
};

export default NavBar;
