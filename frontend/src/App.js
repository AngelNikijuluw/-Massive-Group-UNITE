import React, { useState, useEffect } from "react";
import Preloader from "./pages/Pre";
import Home from "./pages/Home/Home";
import Fitur from "./pages/Home/Home2";
import Harga from "./pages/Home/Home4";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Sidebar from './components/Sidebar.js';
import BukuTamu from './pages/Dashboard/BukuTamu';
import BuatUndangan from './pages//Dashboard/BuatUndangan';
import Dashboard from './pages/Dashboard/Dasboard';
import Product from './pages/Dashboard/QRCode';


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
import QRCode from "./pages/Dashboard/QRCode";


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
      {/* <Sidebar> */}
        

        <div className="App" id={load ? "no-scroll" : "scroll"}>
          {/* <Navbar /> */}
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route exact path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/fitur" element={<Fitur />} />
          <Route path="/harga" element={<Harga />} />
          <Route path="/BukuTamu" element={<BukuTamu />} />
          <Route path="/BuatUndangan" element={<BuatUndangan />} />
          <Route path="/QRCode" element={<QRCode />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          {/* <Footer /> */}
        </div>
        {/* </Sidebar> */}
      </Router>
    </>
  );
}

export default App;
