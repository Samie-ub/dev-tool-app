import React from 'react'
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard";
import { DesignData } from '../assets/design-assets';
function Design() {
  return (
    <div className="top-spacing">
    <Grid container justifyContent={"flex-start"}>
      <Grid item lg={10.4}>
        <Grid container justifyContent={"center"} gap={2}>
          {DesignData.map((item, index) => (
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
  )
}

export default Design