import ImageShow from './ImageShow';
function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow image={image} />;
  });
  return (
    <div>
      {renderedImages}
      {/* <h1>ImageList: {images?.length}</h1> */}
    </div>
  );
}

export default ImageList;
