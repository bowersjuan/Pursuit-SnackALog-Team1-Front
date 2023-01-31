import { useNavigate } from "react-router-dom";
import errorLogo from "../Assets/dalle-juan-404-logo.png";
import "./FourOFour.css";

const FourOFour = () => {
  const navigate = useNavigate();

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <img src={errorLogo} alt="error: not found" width="40%" />
        </div>
        <div className="modal-footer">
          <button onClick={() => navigate("/")}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default FourOFour;
