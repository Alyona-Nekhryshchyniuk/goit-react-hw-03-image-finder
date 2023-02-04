import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ items, getFullImageSrc }) => {
  return items.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <li
        className={css['gallery-item']}
        key={id}
        onClick={() => {
          getFullImageSrc(largeImageURL);
        }}
      >
        <img src={webformatURL} alt={id} />
      </li>
    );
  });
};
export default ImageGalleryItem;
