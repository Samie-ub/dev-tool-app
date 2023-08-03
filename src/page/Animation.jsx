import React from 'react'
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard";
import { AnimationData } from '../assets/animation-assets';

function Animation() {
  return (
    <div className="top-spacing">
    <Grid container justifyContent={"flex-start"}>
      <Grid item lg={10.4}>
        <Grid container justifyContent={"center"} gap={2}>
          {AnimationData.map((item, index) => (
            <Grid item xs={10} sm={6} md={4} lg={3}>
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

export default Animation