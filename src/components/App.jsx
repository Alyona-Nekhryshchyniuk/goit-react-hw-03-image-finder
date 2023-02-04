import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { Audio } from 'react-loader-spinner';
import Button from './Button/Button';
import axios from 'axios';

// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
axios.defaults.baseURL = 'https://pixabay.com/api';

class App extends Component {
  state = {
    searchQuery: '',
    items: [],
    page: 1,
    loadMore: false,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      this.state.loadMore ||
      this.state.searchQuery !== prevState.searchQuery
    ) {
      try {
        this.setState({ loading: true, loadMore: false });
        console.log('перед запросом');
        console.log(this.state.loadMore);
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
    const { items } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.getValue} />
        {this.state.loading ? (
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
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
