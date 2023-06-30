import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./Components/Layout/NavBar";
import { Body } from "./Components/Layout/Body";
import "./App.css";
import Login from "./pages/Login";
import Footer from "./Components/Layout/Footer";
import Register from "./pages/Register";
import Aboutus from "./pages/Aboutus";
import Account from "./pages/Account";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <Body>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </Router>
      <Footer />
    </Body>
  );
}

export default App;
