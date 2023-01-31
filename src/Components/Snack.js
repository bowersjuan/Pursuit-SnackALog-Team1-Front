import { Link } from "react-router-dom";

const Snack = ({ snack }) => {
  return (
    <div className="snack">
      <Link to={`/snacks/${snack.id}`}>
        <div id="snackDetails">
          <h3>{snack.name}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Snack;
