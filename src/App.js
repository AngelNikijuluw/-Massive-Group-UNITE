import React, { useState, useEffect } from "react";
import Preloader from "./pages/Pre";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import Sidebar from './components/Sidebar.js';
import About from './pages/Dashboard/About';
import Analytics from './pages//Dashboard/Analytics';
import Dashboard from './pages/Dashboard/Dasboard';
import Product from './pages/Dashboard/Product';
import ProductList from './pages/Dashboard/ProductList';


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
        <Preloader load={load} />

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
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
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
