import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import {
  clickedImgsState,
  continuousClickCountState,
  countState,
  dialogIsOpenState,
  modalImgState,
  recentClickedImgState,
} from "./States";
import { useEffect, useState } from "react";
import { click } from "@testing-library/user-event/dist/click";

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
  const setModalImg = useSetRecoilState(modalImgState);
  const setDialogIsOpen = useSetRecoilState(dialogIsOpenState);

  const [continuousClickCount, setContinuousClickCount] = useState<number>(0);
  const [recentClickedImg, setRecentClickedImg] = useRecoilState(
    recentClickedImgState
  );

  useEffect(() => {
    recentClickedImg !== filename && setContinuousClickCount(0);
  }, [recentClickedImg]);

  const resetContinue = () => {
    setContinuousClickCount(0);
    setRecentClickedImg(filename);
  };

  const addClickedImg = () => {
    setCount(count + 1);
    setClickedImgs((prevState) => [...prevState, index]);
    !isVisible && setIsVisible(true);
    resetContinue();
  };

  const startContinue = () => {
    setRecentClickedImg(filename);
    setContinuousClickCount(1);
  };
  return (
    <Card sx={{ maxWidth: 128, height: 240 }}>
      <CardActionArea>
        <CardMedia
          component={"img"}
          image={`${process.env.PUBLIC_URL}/dress_images/${filename}`}
          sx={{ maxWidth: "100%", height: 180 }}
          onClick={() => {
            setModalImg(filename);
            setDialogIsOpen(true);
          }}
        />
      </CardActionArea>
      {isVisible ? (
        <CardContent>
          <Typography>{score}</Typography>
        </CardContent>
      ) : (
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              count <= continuousClickCount
                ? addClickedImg()
                : recentClickedImg == filename
                ? setContinuousClickCount(continuousClickCount + 1)
                : startContinue();
            }}
          >
            あと{count - continuousClickCount + 1}回
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default PreferenceCard;
