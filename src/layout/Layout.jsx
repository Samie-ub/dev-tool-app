import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "../components/loader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SocialLinks from "../components/SocialLinks";
import Home from "../page/Home";
import WebDevlopment from "../page/WebDevlopment";
import Design from "../page/Design";
import VideoEditing from "../page/VideoEditing";
import Animation from "../page/Animation";
import NavigationBar from "../components/NavigationBar";
import Mockup from "../page/Mockup";
import Course from "../page/Course";
import AiTools from "../page/AiTools";
import More from "../page/More";
import Pegination from "../components/Pegination";

function Layout() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 899);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="layout">
      <Router>
        <Navbar />
        {isMobile && <Pegination/>}
        <NavigationBar />
        <div className="side_layout postion-fixed">
          <SocialLinks />
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development/tools" element={<WebDevlopment />} />
          <Route path="/design/tools" element={<Design />} />
          <Route path="/video-editing/tools" element={<VideoEditing />} />
          <Route path="/animation/tools" element={<Animation />} />
          <Route path="/mockup/tools" element={<Mockup />} />
          <Route path="/courses/websites" element={<Course />} />
          <Route path="/AI/tools" element={<AiTools />} />
          <Route path="/more-tools" element={<More />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
