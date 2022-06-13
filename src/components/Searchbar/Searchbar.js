import React, { Component } from 'react';
import s from './Searchbar.module.css';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchQuery: ``,
  };

  handleChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowercase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({ query: `` });
  };

  render() {
    return (
      <header class={s.searchbar}>
        <form onSubmit={this.handleSubmit} class={s.form}>
          <button type="submit" class={s.searchButton}>
            <span class={s.buttonLabel}>
              {' '}
              <BsSearch />
            </span>
          </button>

          <input
            class={s.input}
            type="text"
            onChange={this.handleChange}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
