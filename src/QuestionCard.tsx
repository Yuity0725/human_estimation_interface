import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { answersState, hasSendState } from "./States";
import All_data_list from "./all_data_list.json";
import ActionCardMedia from "./ActionCardMedia";

const QuestionCard = ({
  imgIndex,
  filename,
  cardId,
  correctAnswer,
}: {
  imgIndex: number;
  filename: string;
  cardId: number;
  correctAnswer: number;
}) => {
  const [answers, setAnswers] = useRecoilState(answersState);
  const hasSend = useRecoilValue(hasSendState);
  return (
    <Card sx={{ maxWidth: 168, height: 240 }}>
      <ActionCardMedia filename={filename} />
      {hasSend ? (
        <CardContent>
          <Typography>解答: {answers[cardId]}</Typography>
          <Typography>正解: {correctAnswer}</Typography>
        </CardContent>
      ) : (
        <CardActions>
          <TextField
            type="number"
            onChange={(e) =>
              Number(e.target.value) >= 0 && Number(e.target.value) <= 10
                ? setAnswers(
                    answers.map((answer, i) =>
                      i === cardId ? Number(e.target.value) : answer
                    )
                  )
                : alert("0~10の数を入力してください")
            }
            size="small"
          />
        </CardActions>
      )}
    </Card>
  );
};

export default QuestionCard;
