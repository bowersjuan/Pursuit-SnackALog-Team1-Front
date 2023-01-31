import { Link } from "react-router-dom";
import "./Snack.css";
import healthyHeartLogo from "../Assets/healthy_heart.png";
import unhealthyHeartLogo from "../Assets/unhealthy_heart.png";
const Snack = ({ snack }) => {
  return (
    <div className="snack">
      <Link to={`/snacks/${snack.id}`}>
        <div id="snackDetails">
          <h3>
            {snack.name}
            <img
              id="heartLogoSnack"
              src={snack.is_healthy ? healthyHeartLogo : unhealthyHeartLogo}
              alt="heart"
            />
          </h3>{" "}
          <img id="thumbnail" src={snack.image} alt={`${snack.name}`}></img>
        </div>
      </Link>
    </div>
  );
};

export default Snack;
