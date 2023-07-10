import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import ClickedImages from "./ClickedImages";
import All_data_list from "./all_data_list.json";
import Filename_list from "./filename_list.json";
import {
  answersState,
  clickedCountState,
  clickedImgsState,
  hasSendState,
  nameState,
  targetIdState,
} from "./States";
import { Console } from "console";
import QuestionCard from "./QuestionCard";
import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { postAnswers } from "./connect";

const Step3Page = () => {
  const name = useRecoilValue(nameState);
  const clickedImgs = useRecoilValue(clickedImgsState);
  const answers = useRecoilValue(answersState);
  const targetId = useRecoilValue(targetIdState);
  const clickedCount = useRecoilValue(clickedCountState);
  const setHasSend = useSetRecoilState(hasSendState);
  const [sampleImgs, setSampleImgs] = useState<number[]>([]);
  const [cards, setCards] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const clickedImgsSet: Set<number> = new Set(clickedImgs);
    const notClickedImgs: number[] = new Array();
    [...Array(100)].map((_, index) => {
      !clickedImgsSet.has(index) && notClickedImgs.push(index);
    });
    console.log(clickedImgsSet);
    console.log(notClickedImgs);
    const sampleImgs: number[] = new Array();
    [...Array(10)].map(() => {
      const randomIndex = Math.floor(Math.random() * notClickedImgs.length);
      sampleImgs.push(notClickedImgs[randomIndex]);
      notClickedImgs.splice(randomIndex, 1);
    });
    setSampleImgs(sampleImgs);
    const cards = sampleImgs.map((imgIndex, cardId) => {
      return (
        <QuestionCard
          imgIndex={imgIndex}
          filename={Filename_list[imgIndex]}
          cardId={cardId}
          correctAnswer={All_data_list[targetId][imgIndex]}
        />
      );
    });
    setCards(cards);
  }, []);
  return (
    <>
      <h2>表示された服の点数を推測してください</h2>
      <Grid container spacing={3}>
        {cards}
      </Grid>
      <ClickedImages />
      <Button
        onClick={() => {
          window.confirm("解答を終了し、結果を送信してもよろしいですか？") &&
            postAnswers(
              name,
              targetId,
              sampleImgs,
              answers,
              clickedCount,
              clickedImgs,
              setHasSend
            );
        }}
      >
        送信
      </Button>
    </>
  );
};

export default Step3Page;
