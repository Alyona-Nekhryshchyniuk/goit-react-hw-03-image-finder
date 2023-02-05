import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
const modalRoot = document.querySelector('#modal-root');

class ImageGallery extends Component {
  static propTypes = {
    items: PropTypes.array,
  };

  state = {
    selectedImg: {
      url: '',
      type: '',
    },
    modal: false,
  };

  getSelectedImageInfo = (largeImageURL, type) => {
    this.setState({ selectedImg: { url: largeImageURL, type: type } });
    this.toggleModal();
  };

  onEscClick = code => {
    if (code === 'Escape' && this.state.modal) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };
  onBackdropClick = (target, currentTarget) => {
    target === currentTarget && this.toggleModal();
  };

  render() {
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem
            items={this.props.items}
            getSelectedImageInfo={this.getSelectedImageInfo}
          />
        </ul>
        {this.state.modal &&
          createPortal(
            <Modal
              url={this.state.selectedImg.url}
              closeModal={this.toggleModal}
              onEscClick={this.onEscClick}
              alt={this.state.selectedImg.type}
              onBackdropClick={this.onBackdropClick}
            />,
            modalRoot
          )}
      </>
    );
  }
}
export default ImageGallery;
