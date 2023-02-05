import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Dna } from 'react-loader-spinner';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    page: 1,
    loadMore: false,
    loading: false,
    // modal: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.loadMore ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      try {
        this.setState({ loading: true, loadMore: false });

        console.log(this.state.searchQuery !== prevState.searchQuery);

        let { data } = await axios.get('/', {
          params: {
            q: this.state.searchQuery,
            page: this.state.page,
            key: '32103047-74f71fbf2b590f3c03f09df5a',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
          },
        });

        this.setState(prevState => ({
          loading: false,
          items: [...prevState.items, ...data.hits],
        }));
      } catch (error) {
        console.error(error);
      }
    }
  }

  getValue = searchQuery => {
    this.setState({
      items: [],
      page: 1,
      searchQuery,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: (prevState.page += 1),
      loadMore: !prevState.loadMore,
    }));
  };

  render() {
    const { items, modal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.getValue} />
        {this.state.loading ? (
          <Dna
            visible={true}
            height="180"
            width="180"
            ariaLabel="dna-loading"
            wrapperStyle={{
              marginLeft: '50%',
              transform: 'translate(-50%)',
              marginTop: 150,
            }}
          />
        ) : (
          <ImageGallery items={items} />
        )}

        {items.length && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export default App;
