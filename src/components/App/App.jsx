import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

import fetchImages from "../../images-api";

import style from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className={style.page}>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          items={images}
          onClick={handleOpenModal}
        />
      )}
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      <ImageModal
        modalIsOpen={modalIsOpen}
        onClose={handleCloseModal}
        image={selectedImage}
      />
    </section>
  );
}
