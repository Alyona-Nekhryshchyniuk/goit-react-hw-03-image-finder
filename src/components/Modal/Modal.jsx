import { FaRegWindowClose } from 'react-icons/fa';
import css from './Modal.module.css';

const Modal = ({ url, closeModal }) => {
  console.log(url);
  return (
    <div className={css.overlay}>
      <button className={css['close-button']} onClick={() => closeModal()}>
        <FaRegWindowClose />
      </button>
      <div className={css.modal}>
        <img src={url} alt="kjjn" />
      </div>
    </div>
  );
};
export default Modal;
