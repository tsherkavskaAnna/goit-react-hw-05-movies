import React, { Component } from 'react';
import * as pixabayApi from './service/pixabay-api';
import { toast } from 'react-toastify';
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
    error: null,
    largeImage: ``,
    total: 0,
  };

  componentDidMount() {
    const { query, page } = this.state;
    this.fetchPhotos(query, page);
    document.title = `Gallery: ${query}`;
  }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    const prevPage = prevState.page;
    const prevQuery = prevState.query;

    if (prevPage !== page || prevQuery === query) {
      this.setState({ isLoading: true });
      this.fetchPhotos(page, query);
    }
  }

  fetchPhotos = async (query, page) => {
    const data = await pixabayApi.getImages(query, page);

    if (!data.hits.length) {
      this.setState({ images: [] });
      toast(`Sorry, no photos matched your criteria`);
    }

    if (page === 1) {
      this.setState({ images: data.hits });
      return;
    }
    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
    }));
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onOpenModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  openLargeImage = imageXXL => {
    this.onOpenModal();
    this.setState({
      largeImage: imageXXL,
    });
  };
  render() {
    const { images, query, showModal, isLoading, total, largeImage } =
      this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Loader />
        {total && (
          <ImagesGallery images={images} onOpenModal={this.openLargeImage} />
        )}
        {showModal && (
          <Modal
            largeImageURL={largeImage}
            onClose={this.onOpenModal}
            desription={query}
          />
        )}
        {isLoading && <Loader />}
        {images.length > 11 && images.length !== total && !isLoading && (
          <Button onClick={this.onLoadMore} />
        )}
      </div>
    );
  }
}
export default App;
