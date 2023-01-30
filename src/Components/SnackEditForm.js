import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SnackEditForm.css";

const API = process.env.REACT_APP_API_URL;

const SnackEditForm = () => {
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: "",
    image: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setSnack({
      ...snack,
      [e.target.id]: e.target.value,
    });
  };

  const handleNumberChange = (e) => {
    setSnack({
      ...snack,
      [e.target.id]: Number(e.target.value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API}/snacks/${id}`, snack)
      .then(() => navigate(`/snacks/${id}`))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data))
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div className="new-form-container">
      <form className="new-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:{" "}
          <input
            id="name"
            type="text"
            onChange={handleTextChange}
            value={snack.name}
          />
        </label>

        <label htmlFor="fiber">
          Fiber:{" "}
          <input
            id="fiber"
            type="number"
            min={0}
            onChange={handleNumberChange}
            value={snack.fiber}
          />
        </label>

        <label htmlFor="protein">
          Protein:{" "}
          <input
            id="protein"
            type="number"
            min={0}
            onChange={handleNumberChange}
            value={snack.protein}
          />
        </label>

        <label htmlFor="added_sugar">
          Added Sugar:{" "}
          <input
            id="added_sugar"
            type="number"
            min={0}
            onChange={handleNumberChange}
            value={snack.added_sugar}
          />
        </label>

        <label htmlFor="is_healthy">
          Is Healthy:{" "}
          <input
            id="is_healthy"
            type="checkbox"
            onChange={(e) =>
              setSnack({ ...snack, [e.target.id]: !snack[e.target.id] })
            }
            checked={snack.is_healthy}
          />
        </label>

        <label htmlFor="image">
          Image:{" "}
          <input
            id="image"
            type="text"
            onChange={handleTextChange}
            value={snack.image}
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};

export default SnackEditForm;
