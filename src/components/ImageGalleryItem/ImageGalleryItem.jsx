import css from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ items }) => {
  return items.map(({ id, webformatURL }) => {
    return (
      <li className={css['gallery-item']} key={id}>
        <img src={webformatURL} alt={id} />
      </li>
    );
  });
};
export default ImageGalleryItem;
