import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const API = process.env.REACT_APP_API_URL;

const SnackEditForm = () => {
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
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
      .then(() => navigate(`/snacks`))
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => setSnack(response.data[0]))
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          onChange={handleTextChange}
          value={snack.name}
        />
        <label htmlFor="fiber">Fiber: </label>
        <input
          id="fiber"
          type="number"
          min={0}
          onChange={handleNumberChange}
          value={snack.fiber}
        />
        <label htmlFor="protein">Protein: </label>
        <input
          id="protein"
          type="number"
          min={0}
          onChange={handleNumberChange}
          value={snack.protein}
        />
        <label htmlFor="added_sugar">Sugar: </label>
        <input
          id="added_sugar"
          type="number"
          min={0}
          onChange={handleNumberChange}
          value={snack.added_sugar}
        />
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          type="text"
          onChange={handleTextChange}
          value={snack.image}
        />
        <div></div>
        <input id="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default SnackEditForm;
