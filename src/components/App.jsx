import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
const axios = require('axios');

// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';
// import Searchbar from './Searchbar/Searchbar';

import React, { Component } from 'react';

class App extends Component {
  state = {
    searchQuery: '',
  };
  getValue = searchQuery => {

    this.setState({
      searchQuery,
    });
  };

  // https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
  async getImages =()=>{
//     const axios.defaults.baseURL = 'https://pixabay.com/api'
// const key ='32103047-74f71fbf2b590f3c03f09df5a';
// const r = `?q=${this.state.searchQuery}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
//     try {
//       const response = await axios.get(r);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }


  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.getValue} />
        <ImageGallery value={searchQuery} images={this.getImages}/>
      </>
    );
  }
}

export default App;
