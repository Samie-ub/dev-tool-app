import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SocialLinks from "../components/SocialLinks";
import Home from "../page/Home";

function Layout() {
  return (
    <div>
      <Navbar />
      <Sidebar/>
      <SocialLinks/>
      <Home/>
    </div>
  );
}

export default Layout;
