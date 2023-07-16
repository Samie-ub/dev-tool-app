import React from "react";
import { icons } from "../content";

function SocialLinks() {
  return (
    <div className="links_container postion-fixed">
      {icons.map((e) => {
        return (
          <a href={e.link} target="_blank">
            <img className="social_icons" src={e.icon} alt="github_icon" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
