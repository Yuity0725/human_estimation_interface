import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { clickedImgsState, countState } from "./States";
import { useState } from "react";

const PreferenceCard = ({
  filename,
  score,
  index,
}: {
  filename: string;
  score: number;
  index: number;
}) => {
  const [count, setCount] = useRecoilState(countState);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const setClickedImgs = useSetRecoilState(clickedImgsState);
  return (
    <Card sx={{ maxWidth: 128, height: 240 }}>
      <CardMedia
        component={"img"}
        image={`${process.env.PUBLIC_URL}/dress_images/${filename}`}
        sx={{ maxWidth: "100%", height: 180 }}
      />
      {isVisible ? (
        <CardContent>
          <Typography>{score}</Typography>
        </CardContent>
      ) : (
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setCount(count + 1);
              setClickedImgs((prevState) => [...prevState, index]);
              setIsVisible(true);
            }}
          >
            点数を見る
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default PreferenceCard;
