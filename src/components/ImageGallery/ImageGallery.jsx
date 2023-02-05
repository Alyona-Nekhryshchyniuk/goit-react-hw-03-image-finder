import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import Modal from '../Modal/Modal';

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
    const { url, type } = this.state.selectedImg;
    const { toggleModal, onEscClick, onBackdropClick, getSelectedImageInfo } =
      this;
    return (
      <>
        <ul className={css.gallery}>
          <ImageGalleryItem
            items={this.props.items}
            getSelectedImageInfo={getSelectedImageInfo}
          />
        </ul>
        {this.state.modal &&
          createPortal(
            <Modal
              closeModal={toggleModal}
              onEscClick={onEscClick}
              onBackdropClick={onBackdropClick}
            >
              <img src={url} alt={type} />
            </Modal>,
            modalRoot
          )}
      </>
    );
  }
}
export default ImageGallery;
