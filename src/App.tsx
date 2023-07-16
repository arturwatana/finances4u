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
import { createContext, useState } from "react";

type ContentProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContentContext = createContext<ContentProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const contentValues = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <ContentContext.Provider value={contentValues}>
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
    </ContentContext.Provider>
  );
}

export default App;
