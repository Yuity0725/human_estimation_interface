import { useSetRecoilState } from "recoil";
import { dialogIsOpenState, modalImgState } from "./States";
import { CardActionArea, CardMedia } from "@mui/material";

const ActionCardMedia = ({ filename }: { filename: string }) => {
  const setModalImg = useSetRecoilState(modalImgState);
  const setDialogIsOpen = useSetRecoilState(dialogIsOpenState);
  return (
    <CardActionArea>
      <CardMedia
        component={"img"}
        image={`${process.env.PUBLIC_URL}/dress_images/${filename}`}
        sx={{ maxWidth: "100%", height: 180 }}
        onClick={() => {
          setModalImg(filename);
          setDialogIsOpen(true);
        }}
      />
    </CardActionArea>
  );
};

export default ActionCardMedia;
