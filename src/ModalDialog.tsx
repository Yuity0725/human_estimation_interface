import { Dialog } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { dialogIsOpenState, modalImgState } from "./States";

const ModalDialog = () => {
  const [dialogIsOpen, setDialogIsOpen] = useRecoilState(dialogIsOpenState);
  const modalImg = useRecoilValue(modalImgState);
  const handleClose = () => {
    setDialogIsOpen(false);
  };
  return (
    <Dialog open={dialogIsOpen} onClose={handleClose}>
      <img src={`${process.env.PUBLIC_URL}/dress_images/${modalImg}`} />
    </Dialog>
  );
};

export default ModalDialog;
