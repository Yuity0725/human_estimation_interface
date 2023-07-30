import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import Step1Page from "./Step1Page";
import { stepState } from "./States";
import Step2Page from "./Step2Page";
import Step3Page from "./Step3Page";
import Step0Page from "./Step0Page";

function App() {
  const step = useRecoilValue(stepState);
  return (
    <>
      {step === 0 && <Step0Page />}
      {step === 1 && <Step1Page />}
      {step === 2 && <Step2Page />}
      {step === 3 && <Step3Page />}
    </>
  );
}

export default App;
