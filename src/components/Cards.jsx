import React, { useEffect, useState } from "react";
import { webDev } from "../assets/websites-assets";
import { DesignData } from "../assets/design-assets";
import { Grid } from "@mui/material";
import { cardLinkIcon } from "../assets";
import { VideoData } from "../assets/vedio-assets";
import { AnimationData } from "../assets/animation-assets";
import { MockupData } from "../assets/mockup-assets";
import { courseData } from "../assets/courses-assets";
import { aitoolData } from "../assets/ai-assets";
import { moreData } from "../assets/more-assets";
import { uxuiData } from "../assets/uxui-assets";
function Cards() {
  // State Initialization Starts here
  const [mixedData, setMixedData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(27);
  const [isLoading, setIsLoading] = useState(true);

  // State Initialization Ends here
  const handleLoadMore = () => {
    setIsLoading(true);
    setVisibleCards(visibleCards + 6);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  useEffect(() => {
    const combinedData = [
      ...webDev,
      ...uxuiData,
      ...DesignData,
      ...VideoData,
      ...AnimationData,
      ...MockupData,
      ...courseData,
      ...aitoolData,
      ...moreData
    ];
    const shuffledData = shuffleArray(combinedData);
    setMixedData(shuffledData);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div>
      <Grid container justifyContent={"center"} gap={2}>
        {isLoading ? (
          <>
            {mixedData.slice(0, visibleCards).map((item, index) => (
              <Grid xs={10} sm={6} md={4} lg={3} key={index}>
                <div className="card_loader" />
              </Grid>
            ))}
          </>
        ) : (
          <>
            {mixedData.slice(0, visibleCards).map((item, index) => (
              <Grid xs={10} sm={4.9} md={4.2} lg={3} key={index}>
                <div className="card" key={index}>
                  <div className="card_img_container">
                    <img src={item.ImageSrc} alt="tools" />
                  </div>
                  <div className="card_content_container">
                    <div className="tag">
                      <span>{item.tag}</span>
                    </div>
                    <a href={item.websiteLink} target="_blank" rel="noreferrer">
                      <div className="card_link_container">
                        <h1>{item.title}</h1>
                        <img
                          src={cardLinkIcon}
                          className="link_image"
                          alt="link-icon"
                        />
                      </div>
                    </a>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Grid>
            ))}
          </>
        )}
      </Grid>
      {visibleCards < mixedData.length && (
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          mt={5}
          sx={{ mb: { xs: 4, md: 0 } }}
        >
          <Grid item xs={12} md={9} lg={9} mt={5} className="postion-relative">
            <button onClick={handleLoadMore}>
              <p></p>
              <svg
                stroke-width="4"
                stroke="currentColor"
                viewBox="0 0 24 24"
                fill="none"
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default Cards;
