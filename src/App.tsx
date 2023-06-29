import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/Layout/NavBar";
import { Body } from "./Components/Layout/Body";
import "./App.css";
import Login from "./pages/Login";
import Footer from "./Components/Layout/Footer";
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";

function App() {
  return (
    <Body>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <Footer />
    </Body>
  );
}

export default App;
