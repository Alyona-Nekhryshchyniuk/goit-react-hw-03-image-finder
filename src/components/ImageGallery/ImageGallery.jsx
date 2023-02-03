import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
const ImageGallery = ({ items }) => {
  return (
    <ul className="gallery">
      {items.map(item => (
        <ImageGalleryItem item={item} />
      ))}
    </ul>
  );
};
export default ImageGallery;
