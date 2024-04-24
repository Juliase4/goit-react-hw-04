import { ProgressBar } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.wrapper}>
      <b>Please wait or reload page</b>

      <ProgressBar
        visible={true}
        height="80"
        width="80"
        barColor="#A020F0"
        borderColor="#808080"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
