import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";
import "./Snacks.css";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="Snacks">
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </div>
  );
};
export default Snacks;
