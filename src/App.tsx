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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

type ContentProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  notification: boolean;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notificationMessage: NotificationProps;
  setNotificationMessage: React.Dispatch<
    React.SetStateAction<NotificationProps>
  >;
};

type NotificationProps = {
  message: string;
  status: "success" | "error";
};

export const ContentContext = createContext<ContentProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  notification: false,
  setNotification: () => {},
  notificationMessage: {
    message: "",
    status: "success",
  },
  setNotificationMessage: () => {},
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [notification, setNotification] = useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] =
    useState<NotificationProps>({
      message: "",
      status: "success",
    });

  const contentValues = {
    isLoggedIn,
    setIsLoggedIn,
    notification,
    setNotification,
    notificationMessage,
    setNotificationMessage,
  };

  const notify = ({ message, status }: NotificationProps) => {
    if (status === "error") {
      toast.error(message);
      return;
    }
    toast.success(message);
  };
  useEffect(() => {
    if (notification) {
      notify(notificationMessage);
      setNotification(false);
    }
  }, [notification]);

  return (
    <ContentContext.Provider value={contentValues}>
      <Body>
        <Router>
          <NavBar />
          <ToastContainer position="top-right" autoClose={5000} />
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
