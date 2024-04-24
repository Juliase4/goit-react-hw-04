import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ items, onClick }) {
  return (
    <>
      <ul className={style.gallery}>
        {items.map((item) => (
          <li
            className={style.item}
            key={item.id}>
            <ImageCard
              {...item}
              onClick={onClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
