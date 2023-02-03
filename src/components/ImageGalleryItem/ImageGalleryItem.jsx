const ImageGalleryItem = ({ item }) => {
  const { id, webformatURL } = item;
  return ` <li className="gallery-item" key=${id}>
    //     <img src="${webformatURL}" alt="${id}" />
    //   </li>;`;
};
export default ImageGalleryItem;
