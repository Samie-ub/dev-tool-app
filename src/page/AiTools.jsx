import React from 'react'
import { Grid } from "@mui/material";
import SingleCard from "../components/SingleCard";
import { aitoolData } from '../assets/ai-assets';
function AiTools() {
  return (
    <div className="top-spacing">
    <Grid container justifyContent={"flex-start"}>
      <Grid item lg={10.4}>
        <Grid container justifyContent={"center"} gap={2}>
          {aitoolData.map((item, index) => (
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

export default AiTools