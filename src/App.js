import React, { useState, useEffect } from "react";
import Preloader from "./pages/Pre";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";


import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dasboard";


function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Router>
        <Preloader load={load} />

        <div className="App" id={load ? "no-scroll" : "scroll"}>
          {/* <Navbar /> */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
