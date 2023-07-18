import React from "react";
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard";
import { webDev } from "../assets/websites-assets";
function WebDevlopment() {
  return (
    <div className="top-spacing">
      <Grid container justifyContent={"flex-start"}>
        <Grid item lg={10.4}>
          <Grid container justifyContent={"center"} gap={2}>
            {webDev.map((item, index) => (
              <Grid item lg={3}>
                <SingleCard
                  key={index}
                  ImageSrc={item.ImageSrc}
                  title={item.title}
                  description={item.description}
                  websiteLink={item.websiteLink}
                  tag={item.tag}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default WebDevlopment;
