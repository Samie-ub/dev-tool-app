import React from "react";
import { webDev } from "../assets/websites assets";
import { Grid } from "@mui/material";
import { cardLinkIcon } from "../assets";
function Cards() {
  return (
    <div>
      <Grid container justifyContent={"center"} gap={2}>
        {webDev.map((e) => {
          return (
            <Grid lg={3}>
              <div className="card">
                <div className="card_img_container">
                  <img src={e.ImageSrc} alt="website image" />
                </div>
                <div className="card_content_container">
                    <a href={e.websiteLink} target="_blank">
                  <div className="card_link_container">
                    <h1>{e.title}</h1>
                    <img src={cardLinkIcon} alt="" />
                    
                  </div>
                    </a>

                  <p>{e.description}</p>
                </div>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Cards;
