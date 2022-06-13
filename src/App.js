import React, { Component } from 'react';
import * as pixabayApi from './service/pixabay-api';
import axios from 'axios';
import Searchbar from 'components/Searchbar/Searchbar';

class FinderApp extends Component {
  state = {
    images: [],
    query: ``,
    page: 1,
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const { query, page } = this.state;

    try {
      const { query, page } = this.state;
      const data = await pixabayApi.getImages(query, page);
      this.setState({ images: data.hits });

      document.title = `FinderApp - ${query}`;
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  // getPhotos = async (query, page) => {
  //   const data = await pixabayApi.getImages(query, page);
  //   if(page === 1) {
  //     this.setState({images: data.hits});
  //     return
  //   }
  //   this.setState(prevState => ({
  //     images: [...prevState.images, ...data.hits]
  //   }))
  // }

  render() {
    const { images, page, query } = this.state;
    console.log(this.state);
    return (
      // <Container>
      <div>
        <Searchbar></Searchbar>
        <ul>
          {this.state.images.map(image => {
            const { id, tags, webformatURL, largeImageURL } = image;
            return (
              <li>
                <img key={id} src={webformatURL} alt={tags}></img>
              </li>
            );
          })}
        </ul>
      </div>
      // </Container>
    );
  }
}
export default FinderApp;
