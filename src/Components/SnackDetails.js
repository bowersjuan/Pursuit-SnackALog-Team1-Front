import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import healthyHeartLogo from "../Assets/healthy_heart.png";
import unhealthyHeartLogo from "../Assets/unhealthy_heart.png";
import "./SnackDetails.css";

const API = process.env.REACT_APP_API_URL;

const SnackDetails = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [snack, setSnack] = useState({});
  const { added_sugar, fiber, is_healthy, name, protein, image } = snack;

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data[0]))
      .catch((err) => {
        console.error(err);
        navigate("/not-found");
      });
  }, [id, navigate]);

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
      <img className="thumbnail" src={image} alt={`${name}`}></img>
      <h2>
        {name}{" "}
        <img
          id="heartLogo"
          src={is_healthy ? healthyHeartLogo : unhealthyHeartLogo}
          alt="heart"
        />
      </h2>
      <h5>Added Sugar: {added_sugar}</h5>
      <h5>Fiber: {fiber}</h5>
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
