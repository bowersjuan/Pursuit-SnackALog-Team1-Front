import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import FourOFour from "./Pages/FourOFour";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import SnackDetails from "./Components/SnackDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/:index" element={<Show />} />
            <Route path="/snacks/new" element={<New />} />
            <Route path="/snacks/:index/edit" element={<Edit />} />
            <Route path="/not-found" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
