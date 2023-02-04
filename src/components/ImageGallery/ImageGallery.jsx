import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
const ImageGallery = ({ items }) => {
  return (
    <ul className={css.gallery}>
      <ImageGalleryItem items={items} />
    </ul>
  );
};
export default ImageGallery;
