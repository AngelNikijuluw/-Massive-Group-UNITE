import React, { useState, useEffect } from "react";
import Preloader from "./pages/Pre";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import HomeArtikel from "./pages/Artikel/Home_artikel";
import HomeCourse from "./pages/Course/Home_Course";
import MemberShip from "./pages/Profile/Membership";
import RiwayatTransaksi from "./pages/Profile/RiwayatTransaksi";

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
import Artikel1 from "./pages/Artikel/Artikel1";
import Course1 from "./pages/Course/Course1";
import ContentCourse from "./pages/Course/Content_Course";
import ContentCourse1 from "./pages/Course/ContentCourse1";
import ContentCourse2 from "./pages/Course/ContentCourse2";
import ContentCourse3 from "./pages/Course/ContentCourse3";
import Artikel2 from "./pages/Artikel/Artikel2";
import Artikel6 from "./pages/Artikel/Artikel6";
import Artikel5 from "./pages/Artikel/Artikel5";
import Artikel4 from "./pages/Artikel/Artikel4";
import Artikel3 from "./pages/Artikel/Artikel3";
import ContentCourse4 from "./pages/Course/ContentCourse4";
import ContentCourse5 from "./pages/Course/ContentCourse5";
import ContentCourse6 from "./pages/Course/ContentCourse6";
import ContentCourse7 from "./pages/Course/ContentCourse7";
import ContentCourse9 from "./pages/Course/ContentCourse9";
import ContentCourse10 from "./pages/Course/ContentCourse10";
import ContentCourse11 from "./pages/Course/ContentCourse11";
import ContentCourse8 from "./pages/Course/ContentCourse8";
import ProteksiAsuransi from "./pages/Course/filter_proteksi_asuransi";
import InvestasiSaham from "./pages/Course/filterInvestasiSaham";

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
            <Route path="/HomeArtikel" element={<HomeArtikel />} />
            <Route path="/HomeCourse" element={<HomeCourse />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Artikel1" element={<Artikel1 />} />
            <Route path="/Artikel2" element={<Artikel2 />} />
            <Route path="/Artikel3" element={<Artikel3 />} />
            <Route path="/Artikel4" element={<Artikel4 />} />
            <Route path="/Artikel5" element={<Artikel5 />} />
            <Route path="/Artikel6" element={<Artikel6 />} />
            <Route path="/Course1" element={<Course1 />} />
            <Route path="/ContentCourse" element={<ContentCourse />} />
            <Route path="/contentCourse1" element={<ContentCourse1 />} />
            <Route path="/contentCourse2" element={<ContentCourse2 />} />
            <Route path="/contentCourse3" element={<ContentCourse3 />} />
            <Route path="/contentCourse4" element={<ContentCourse4 />} />
            <Route path="/contentCourse5" element={<ContentCourse5 />} />
            <Route path="/contentCourse6" element={<ContentCourse6 />} />
            <Route path="/contentCourse7" element={<ContentCourse7 />} />
            <Route path="/contentCourse8" element={<ContentCourse8 />} />
            <Route path="/contentCourse9" element={<ContentCourse9 />} />
            <Route path="/contentCourse10" element={<ContentCourse10 />} />
            <Route path="/contentCourse11" element={<ContentCourse11 />} />
            <Route path="/ProteksiAsuransi" element={<ProteksiAsuransi />} />
            <Route path="/InvestasiSaham" element={<InvestasiSaham />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/MemberShip" element={<MemberShip />} />
            <Route path="/RiwayatTransaksi" element={<RiwayatTransaksi />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
