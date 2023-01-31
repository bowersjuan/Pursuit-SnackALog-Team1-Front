import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Form.css";

const API = process.env.REACT_APP_API_URL;

const SnackNewForm = () => {
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
    image: "",
  });
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
      .post(`${API}/snacks`, snack)
      .then(() => navigate(`/snacks`))
      .catch((e) => console.error(e));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          placeholder="...Trail Mix"
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
        <label htmlFor="added_sugar">Added Sugar: </label>
        <input
          id="added_sugar"
          type="number"
          min={0}
          onChange={handleNumberChange}
          value={snack.added_sugar}
        />
        <label htmlFor="is_healthy">Is Healthy: </label>
        <input
          id="is_healthy"
          type="checkbox"
          onChange={(e) =>
            setSnack({ ...snack, [e.target.id]: !snack[e.target.id] })
          }
          checked={snack.is_healthy}
        />
        <label htmlFor="image">Image: </label>
        <input
          id="image"
          type="text"
          placeholder="...https://picsum..."
          onChange={handleTextChange}
          value={snack.image}
        />
        <div></div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default SnackNewForm;
