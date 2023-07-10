import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { answersState, hasSendState } from "./States";
import All_data_list from "./all_data_list.json";

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
      <CardMedia
        component={"img"}
        image={`${process.env.PUBLIC_URL}/dress_images/${filename}`}
        sx={{ maxWidth: "100%", height: 180 }}
      />
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
