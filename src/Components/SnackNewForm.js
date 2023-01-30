import { useState } from "react";
import "./SnackNewForm.css";

const SnackNewForm = () => {
  const [checked, setChecked] = useState(false);
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    addedSugar: "",
    isHealthy: checked,
    image: "",
  });

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

  const handleCheckbox = () => {
    setChecked(!checked);
    setSnack({ ...snack, isHealthy: checked });
  };

  return (
    <div className="new-form-container">
      <form className="new-form">
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

        <label htmlFor="addedSugar">
          Added Sugar:{" "}
          <input
            id="addedSugar"
            type="number"
            min={0}
            onChange={handleNumberChange}
            value={snack.addedSugar}
          />
        </label>

        <label htmlFor="isHealthy">
          Is Healthy:{" "}
          <input
            id="isHealthy"
            type="checkbox"
            onChange={handleCheckbox}
            value={snack.isHealthy}
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

export default SnackNewForm;
