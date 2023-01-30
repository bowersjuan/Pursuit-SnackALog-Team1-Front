import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const SnackDetails = () => {
  const [snack, setSnack] = useState({});
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => setSnack(res.data))
      .catch((err) => console.error(err));
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
      <h3>{snack.name}</h3>

      <Link to="/snacks">
        <button id="btnBack">Back</button>
      </Link>
      <Link to={`/snacks/${id}/edit`}>
        <button id="btnEdit">Edit</button>
      </Link>
      <Link>
        <button id="btnDelete" onClick={deleteSnack}>
          Delete
        </button>
      </Link>
    </div>
  );
};

export default SnackDetails;
