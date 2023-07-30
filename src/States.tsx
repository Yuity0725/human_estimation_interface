import { atom, selector } from "recoil";
import { RecoilAtomKeys, RecoilSelectorKeys } from "./RecoilKeys";

export const nameState = atom<string>({
  key: RecoilAtomKeys.NAME,
  default: "",
});

export const targetIdState = atom<number>({
  key: RecoilAtomKeys.TARGET_ID,
  default: -1,
});

export const stepState = atom<number>({
  key: RecoilAtomKeys.STEP,
  default: 0,
});

export const countState = atom<number>({
  key: RecoilAtomKeys.COUNT,
  default: 0,
});

export const continuousClickCountState = atom<number>({
  key: RecoilAtomKeys.CONTINUOUS_CLICK_COUNT,
  default: 0,
});

export const recentClickedImgState = atom<string>({
  key: RecoilAtomKeys.RECENT_CLICKED_IMG,
  default: undefined,
});

export const clickedImgsState = atom<number[]>({
  key: RecoilAtomKeys.CLICKED_IMG_SET,
  default: [],
});

export const clickedCountState = selector<number>({
  key: RecoilSelectorKeys.CLICKED_COUNT,
  get: ({ get }) => {
    const clickedImgSet = get(clickedImgsState);
    return clickedImgSet.length;
  },
});

export const answersState = atom<number[]>({
  key: RecoilAtomKeys.ANSWERS,
  default: new Array(10).fill(-1),
});

export const hasSendState = atom<boolean>({
  key: RecoilAtomKeys.HAS_SEND,
  default: false,
});

export const modalImgState = atom<string>({
  key: RecoilAtomKeys.MODAL_IMG,
  default: undefined,
});

export const dialogIsOpenState = atom<boolean>({
  key: RecoilAtomKeys.DIALOG_IS_OPEN,
  default: false,
});
