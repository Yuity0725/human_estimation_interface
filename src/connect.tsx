import axios from "axios";
import QueryString from "qs";

export const postAnswers = (
  name: string,
  targetId: number,
  sampleImgs: number[],
  answers: number[],
  clickedCount: number,
  clickedImgs: number[],
  setHasSend: Function
) => {
  const url =
    "https://script.google.com/macros/s/AKfycbx3BG9LhRINTI2aUD9hPJXAJvPG87641NdUE74mtljCJGGuYXiVn-pA5nWhKdijCwd-tg/exec";
  axios
    .post(
      url,
      QueryString.stringify({
        action: "insert",
        sheetName: "human",
        date_time: new Date(),
        name: name,
        target_ID: targetId,
        ID_of_image0: sampleImgs[0],
        score_of_image0: answers[0],
        ID_of_image1: sampleImgs[1],
        score_of_image1: answers[1],
        ID_of_image2: sampleImgs[2],
        score_of_image2: answers[2],
        ID_of_image3: sampleImgs[3],
        score_of_image3: answers[3],
        ID_of_image4: sampleImgs[4],
        score_of_image4: answers[4],
        ID_of_image5: sampleImgs[5],
        score_of_image5: answers[5],
        ID_of_image6: sampleImgs[6],
        score_of_image6: answers[6],
        ID_of_image7: sampleImgs[7],
        score_of_image7: answers[7],
        ID_of_image8: sampleImgs[8],
        score_of_image8: answers[8],
        ID_of_image9: sampleImgs[9],
        score_of_image9: answers[9],
        clicked_count: clickedCount,
        clicked_images: clickedImgs.join(","),
      })
    )
    .then((response) => {
      console.log(response);
      setHasSend(true);
    })
    .catch((error) => {
      console.log(error);
    });
};
