import { useRecoilState, useSetRecoilState } from "recoil";
import { stepState, targetIdState } from "./States";
import { Button, Grid, TextField } from "@mui/material";

const Step1Page = () => {
  const [id, setId] = useRecoilState(targetIdState);
  const setStep = useSetRecoilState(stepState);
  return (
    <>
      <h2>0~646の間で好きな数字を入力してください</h2>
      <Grid>
        <TextField
          type="number"
          onChange={(e) => setId(Number(e.target.value))}
          size="small"
        />
      </Grid>
      <Grid>
        <Button
          onClick={() => {
            id >= 0 && id <= 646
              ? setStep(1)
              : alert("0~646の数を入力してください");
          }}
          variant="outlined"
          size="medium"
        >
          送信
        </Button>
      </Grid>
    </>
  );
};

export default Step1Page;
