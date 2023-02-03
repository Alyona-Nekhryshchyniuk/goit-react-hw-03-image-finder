import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      try {
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
          items: [...prevState.items, ...data.hits],
        }));
      } catch (error) {
        console.error(error);
      }
    }
  }

  getValue = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getValue} />
        {items && <ImageGallery items={items} />}
      </>
    );
  }
}

export default App;
