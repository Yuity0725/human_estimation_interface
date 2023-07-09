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
      <h3>点数を見たい画像をクリックしてください。</h3>
      <Grid container spacing={3}>
        {imgs}
      </Grid>
    </>
  );
};

export default PreferenceTable;
