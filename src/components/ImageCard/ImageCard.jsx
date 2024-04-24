import styles from "./ImageCard.module.css";

export default function ImageCard({ urls: { small, regular }, alt, onClick }) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.img}
        src={small}
        width="500"
        alt={alt}
        onClick={() => onClick(regular)}
      />
    </div>
  );
}
