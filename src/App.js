import React, { Component } from 'react';

import * as pixabayApi from './service/pixabay-api';
import Searchbar from 'components/Searchbar/Searchbar';
import ImagesGallery from 'components/ImageGallery/ImagaeGallery';
import Button from 'components/Button/Button';

class App extends Component {
  state = {
    images: [],
    query: ``,
    page: 1,
    showModal: false,
    isLoading: false,
    error: null,
    largeImage: {},
    total: 0,
  };

  componentDidMount() {
    const { query, page } = this.state;
    this.fetchPhotos(query, page);
    document.title = `Gallery: ${query}`;
  }

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ isLoading: true });
      this.fetchPhotos(query, page);
    }
  }

  fetchPhotos = async (query, page) => {
    const data = await pixabayApi.getImages(query, page);

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

  render() {
    const { images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesGallery images={images} />

        {images.length > 11 && <Button onClick={this.onLoadMore} />}
      </div>
    );
  }
}
export default App;
