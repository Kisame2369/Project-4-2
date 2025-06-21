
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './images-api';
import { type PhotoCollection } from './types';

export default function App() {

  const [images, setImages] = useState<PhotoCollection[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [topic, setTopic] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<PhotoCollection | null>(null);

  const handleSearch = (newTopic: string): void => {
    setTopic(newTopic);
    setCurrentPage(1);
    setImages([]);
  };

  const addPage = (): void => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = (image:PhotoCollection): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (topic === '') {
      return;
    }

    async function fetchData(): Promise<void> {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(topic, currentPage);
        setImages((prevImages) => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [currentPage, topic]);

  const lastPage = currentPage === totalPages;
  const hasImages = images.length > 0;

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage/>}
      {hasImages && <ImageGallery items={images} onImageClick={openModal} />}
      {loading && <Loader />}
      {hasImages && !loading && !lastPage && <LoadMoreBtn onClick={addPage} />}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        image={selectedImage} 
      />
      <Toaster position="top-right" />
    </>
  );
}