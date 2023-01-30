import { Link } from "react-router-dom";

const Snack = ({ snack, index }) => {
  return (
    <div className="snack">
      <Link to={`/snacks/${index}`}>
        <section id="snackDetails">
          <h3>{snack.name}</h3>
        </section>
      </Link>
    </div>
  );
};

export default Snack;
