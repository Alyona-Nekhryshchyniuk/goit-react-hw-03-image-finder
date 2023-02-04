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

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  getFullImageSrc = largeImageURL => {
    this.setState({
      url: largeImageURL,
    });
    this.toggleModal();
  };
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
