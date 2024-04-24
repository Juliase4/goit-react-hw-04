import style from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={style.wrapper}>
      <button
        onClick={onClick}
        className={style.btn}
        type="button">
        Load more
      </button>
    </div>
  );
}
