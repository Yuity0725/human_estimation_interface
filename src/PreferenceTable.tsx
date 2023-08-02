import { Grid } from "@mui/material";
import PreferenceCard from "./PreferenceCard";
import All_data_list from "./all_data_list.json";
import Filename_list from "./filename_list.json";
import { useRecoilValue } from "recoil";
import { targetIdState } from "./States";

const PreferenceTable = () => {
  const id = useRecoilValue(targetIdState);
  const target = All_data_list[id];
  const imgs = Filename_list.map((filename, i) => {
    return (
      <Grid item xs={1}>
        <PreferenceCard filename={filename} score={target[i]} index={i} />
      </Grid>
    );
  });
  return (
    <>
      <h3>点数を見たい画像のボタンをクリックしてください。</h3>
      <ul>
        <li>
          ボタンに書かれた回数分連続でクリックすることで点数を見ることができます。
        </li>
        <li>画像をクリックすると拡大表示されます。</li>
        <li>この人の好みを充分予想できると思うまで点数を見てください。</li>
        <li>
          予想できると思ったら画面の一番下の「次へ」ボタンを押してください。
        </li>
      </ul>
      <Grid container spacing={3}>
        {imgs}
      </Grid>
    </>
  );
};

export default PreferenceTable;
