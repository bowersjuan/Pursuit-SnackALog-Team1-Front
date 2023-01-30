import { Link } from "react-router-dom";

const Snack = ({ snack, id }) => {
  return (
    <div className="snack">
      <Link to={`/snacks/${id}`}>
        <section id="snackDetails">
          <h3>{snack.name}</h3>
        </section>
      </Link>
    </div>
  );
};

export default Snack;
