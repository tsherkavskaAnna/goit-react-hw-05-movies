import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as pixabayApi from './service/pixabay-api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImagesGallery from 'components/ImageGallery/ImagaeGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(``);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState(``);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);

    const fetchImages = async () => {
      try {
        const images = await pixabayApi.getImages(query, page);
        setImages(prevState => [...prevState, ...images.hits]);
        setTotalHits(images.hits.length);

        if (images.length === 0) {
          toast.error(`Sorry, no photos matched your criteria`);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setIsLoading(false);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onOpenModal = largeImage => {
    setShowModal(true);
    setLargeImage(largeImage);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      <ToastContainer />
      {isLoading && <Loader />}
      {images.length !== 0 && (
        <ImagesGallery images={images} onOpenModal={onOpenModal} />
      )}
      {totalHits < 12 ? null : <Button onLoadMore={onLoadMore} />}
      {showModal && (
        <Modal largeImage={largeImage} onCloseModal={onCloseModal} />
      )}
    </div>
  );
}

export default App;
