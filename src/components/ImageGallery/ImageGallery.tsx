import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard.tsx";
import type { PhotoCollection } from "../../types.js";

type ImageGalleryProps = {
  items: PhotoCollection[];
  onImageClick: (image: PhotoCollection) => void;
};

export default function ImageGallery({ items, onImageClick }: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}