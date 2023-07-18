import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SocialLinks from "../components/SocialLinks";
import Home from "../page/Home";
import WebDevlopment from "../page/WebDevlopment";
import Design from "../page/Design";
import VideoEditing from "../page/VideoEditing";
import Footer from "../components/Footer";

function Layout() {
  window.addEventListener('scroll', () => {
    const sidebar = document.querySelector('.sidebar_container');
    const footer = document.querySelector('.footer');
    const windowHeight = window.innerHeight;
  const footerOffsetTop = footer.offsetTop;
  
    if (window.pageYOffset + windowHeight >= footerOffsetTop) {
      const diff = (window.pageYOffset + windowHeight) - footerOffsetTop;
      sidebar.style.transform = `translateY(-${diff}px)`;
    } else {
      sidebar.style.transform = 'none';
    }
  });
  return (
    <div>
      <Router>
        <Navbar />
        <Sidebar />
        <SocialLinks />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development/tools" element={<WebDevlopment />} />
          <Route path="/design/tools" element={<Design />} />
          <Route path="/video-editing/tools" element={<VideoEditing />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default Layout;
