import React from "react";
import { cardLinkIcon } from "../assets";

function SingleCard({ ImageSrc, title, description, websiteLink, tag }) {
  return (
      <div>
            <div className="card">
              <div className="card_img_container">
                <img src={ImageSrc} alt="tools" />
              </div>
              <div className="card_content_container">
                <div className="tag">
                  <span>{tag}</span>
                </div>
                <a href={websiteLink} target="_blank" rel="noreferrer">
                  <div className="card_link_container">
                    <h1>{title}</h1>
                    <img src={cardLinkIcon} alt="" />
                  </div>
                </a>

                <p>{description}</p>
              </div>
            </div>
      </div>
  );
}

export default SingleCard;
