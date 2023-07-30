import { Button } from "@mui/material";
import ClickedImages from "./ClickedImages";
import PreferenceTable from "./PreferenceTable";
import { useSetRecoilState } from "recoil";
import { stepState } from "./States";
import ModalDialog from "./ModalDialog";

const Step2Page = () => {
  const setStep = useSetRecoilState(stepState);
  return (
    <>
      <h2>ある人物の好みを当ててください</h2>
      <ClickedImages />
      <PreferenceTable />
      <ModalDialog />
      <Button
        onClick={() => {
          window.confirm(
            "「OK」を押すとこのページには戻れません。本当によろしいですか?"
          ) && setStep(2);
        }}
      >
        次へ
      </Button>
    </>
  );
};

export default Step2Page;
