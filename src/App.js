import React, { Component } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import * as pixabayApi from './service/pixabay-api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImagesGallery from 'components/ImageGallery/ImagaeGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    images: [],
    query: ``,
    page: 1,
    showModal: false,
    isLoading: false,
    largeImage: ``,
    error: null,
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    const prevPage = prevState.page;
    const prevQuery = prevState.query;

    if (prevPage < page || prevQuery !== query) {
      this.setState({ isLoading: true, error: null });

      try {
        const images = await pixabayApi.getImages(query, page);
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images.hits],
            isLoading: false,
          };
        });
        if (!images.hits.length) {
          this.setState({ images: [] });
          toast.error(`Sorry, no photos matched yoor criteria`);
          return;
        }
      } catch (error) {
        this.setState({
          isLoading: false,
          error: error.message,
        });
      }
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  onOpenModal = image => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: image,
    }));
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };
  openLargeImage = largeImg => {
    this.onOpenModal();
    this.setState({
      largeImage: largeImg,
    });
  };

  render() {
    const { images, showModal, isLoading, largeImage } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImagesGallery images={images} onOpenModal={this.onOpenModal} />
        )}
        {images.length > 11 && <Button onLoadMore={this.onLoadMore}></Button>}
        {showModal && (
          <Modal largeImage={largeImage} onModalClick={this.onOpenModal} />
        )}
      </div>
    );
  }
}
export default App;
