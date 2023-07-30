import { useRecoilState, useSetRecoilState } from "recoil";
import { nameState, stepState, targetIdState } from "./States";
import { Button, Grid, TextField } from "@mui/material";

const Step1Page = () => {
  const [name, setName] = useRecoilState(nameState);
  const [id, setId] = useRecoilState(targetIdState);
  const setStep = useSetRecoilState(stepState);
  return (
    <>
      <h2>名前と0~646の好きな数字を入力してください</h2>
      <Grid>
        <TextField
          required
          label="Name"
          size="small"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          required
          type="number"
          label="Number"
          onChange={(e) => setId(Number(e.target.value))}
          size="small"
        />
      </Grid>
      <Grid>
        <Button
          onClick={() => {
            const message: string[] = new Array();
            name == "" && message.push("名前を入力してください");
            (id < 0 || id >= 646) &&
              message.push("0~646の数を入力してください");
            message.length == 0 ? setStep(2) : alert(message.join("\n"));
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
