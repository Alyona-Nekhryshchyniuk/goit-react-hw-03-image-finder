import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import React, { Component } from 'react';
class ImageGallery extends Component {
  state = {
    url: '',
    modal: false,
  };

  componentDidMount() {
    console.log('start')
    window.addEventListener('keydown', onEscClick);
  }

  componentWillUnmount(){
    console.log('finish')
  }

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };


onEscClick = ({ code }) => {
  if (code === 'Escape' && this.state.modal) {
    this.toggleModal();
  }
}
  }

  getFullImageSrc = largeImageURL => {
    this.setState({
      url: largeImageURL,
    });
    this.toggleModal();
  };

  // onBackdropClick = ()=>{

  // }

  render() {
    const modalRoot = document.querySelector('#modal-root');
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem
            items={this.props.items}
            getFullImageSrc={this.getFullImageSrc}
          />
        </ul>
        {this.state.modal &&
          createPortal(
            <Modal url={this.state.url} closeModal={this.toggleModal} />,
            modalRoot
          )}
      </>
    );
  }
}
export default ImageGallery;
