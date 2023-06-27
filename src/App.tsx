import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/Layout/NavBar";
import { Body } from "./Components/Layout/Body";
import "./App.css";

function App() {
  return (
    <Body>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Body>
  );
}

export default App;
