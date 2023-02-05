import { FaRegWindowClose } from 'react-icons/fa';
import css from './Modal.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    url: PropTypes.string,
    alt: PropTypes.string,
    closeModal: PropTypes.func,
    onEscClick: PropTypes.func,
    onBackdropClick: PropTypes.func,
  };
  componentDidMount() {
    window.addEventListener('keydown', ({ code }) => {
      this.props.onEscClick(code);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onEscClick);
  }

  render() {
    return (
      <div
        className={css.overlay}
        onClick={e => {
          this.props.onBackdropClick(e.target, e.currentTarget);
        }}
      >
        <button
          className={css['close-button']}
          onClick={() => this.props.closeModal()}
        >
          <FaRegWindowClose />
        </button>
        <div className={css.modal}>
          <img src={this.props.url} alt={this.props.type} />
        </div>
      </div>
    );
  }
}
export default Modal;
