import { useRecoilValue } from "recoil";
import { clickedCountState, clickedImgsState, targetIdState } from "./States";

import All_data_list from "./all_data_list.json";
import Filename_list from "./filename_list.json";
import { Card, CardMedia, Grid, Typography } from "@mui/material";
import PreferenceCard from "./PreferenceCard";

const ClickedImages = () => {
  const id = useRecoilValue(targetIdState);
  const target = All_data_list[id];
  const clickedImgs = useRecoilValue(clickedImgsState);
  const clickedCount = useRecoilValue(clickedCountState);
  const cards = clickedImgs.map((index) => {
    const filename = Filename_list[index];
    return (
      <Grid item xs={1}>
        <Card sx={{ maxWidth: 128, height: 240 }}>
          <CardMedia
            component={"img"}
            image={`${process.env.PUBLIC_URL}/dress_images/${filename}`}
            sx={{ maxWidth: "100%", height: 180 }}
          />
          <Typography>{target[index]}</Typography>
        </Card>
      </Grid>
    );
  });

  return (
    <>
      <h3>選択された画像: {clickedCount}枚</h3>
      <Grid container spacing={3}>
        {cards}
      </Grid>
    </>
  );
};

export default ClickedImages;
