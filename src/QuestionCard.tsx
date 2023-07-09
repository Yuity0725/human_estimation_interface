import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { answersState } from "./States";

const QuestionCard = ({
  imgIndex,
  filename,
  cardId,
}: {
  imgIndex: number;
  filename: string;
  cardId: number;
}) => {
  const [answers, setAnswers] = useRecoilState(answersState);
  return (
    <Card sx={{ maxWidth: 128, height: 240 }}>
      <CardMedia
        component={"img"}
        image={`${process.env.PUBLIC_URL}/dress_images/${filename}`}
        sx={{ maxWidth: "100%", height: 180 }}
      />
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
    </Card>
  );
};

export default QuestionCard;
