import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import healthyHeartLogo from "../Assets/healthy_heart.png";
import unhealthyHeartLogo from "../Assets/unhealthy_heart.png";

const API = process.env.REACT_APP_API_URL;

const SnackDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState({});
  const { added_sugar, fiber, is_healthy, name, protein, image } = snack;

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate("/snacks");
        window.alert("Item successfully deleted.");
      })
      .catch((err) => {
        console.error(err);
        window.alert("Error, log not deleted.");
      });
  };

  return (
    <div className="snackDetails">
      <img
        id="heartLogo"
        src={is_healthy ? healthyHeartLogo : unhealthyHeartLogo}
        alt="heart"
      />
      <img src={image} alt={`${name}`}></img>
      <h3>{name}</h3>
      <h5>Added Sugar: {added_sugar}</h5>
      <h5>Fiber: {fiber}</h5>
      <h5>Is Healthy?: {is_healthy}</h5>
      <h5>Protein: {protein}</h5>

      <div className="snackDetailsButtons">
        <Link to="/snacks">
          <button id="btnBack">Back</button>
        </Link>
        <Link to={`/snacks/${id}/edit`}>
          <button id="btnEdit">Edit</button>
        </Link>
        <button id="btnDelete" onClick={deleteSnack}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default SnackDetails;
