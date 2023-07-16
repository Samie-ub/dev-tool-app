import React from "react";
import { sideBarLinks } from "../content/index";


function Sidebar() {
  return (
    <div className="sidebar_container postion-fixed">
      {sideBarLinks.map((e) => {
        return (
          <div className="sidebar_btn">
            <img src={e.iconLink} alt="icons"/>
            <p>{e.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Sidebar;
