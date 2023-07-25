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

function Layout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div> 
      <Router>
        <Navbar />
        <NavigationBar />
        <SocialLinks />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web-development/tools" element={<WebDevlopment />} />
          <Route path="/design/tools" element={<Design />} />
          <Route path="/video-editing/tools" element={<VideoEditing />} />
          <Route path="/animation/tools" element={<Animation />} />
          <Route path="/mockup/tools" element={<Mockup />} />
          <Route path="/courses/websites" element={<Course />} />
          <Route path="/AI/tools" element={<AiTools />} />
          <Route path="/more-tools" element={<More/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default Layout;
