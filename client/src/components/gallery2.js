import React, { useState, useEffect } from "react";
import axios from "axios";
const imagesURl = `http://localhost:5000/images`;

export default function Gallery() {
  const [images, setImages] = useState([]);

  const getImages = () => {
    axios.get(imagesURl).then(res => setImages(res.data));
  };

  useEffect(() => {
    getImages();
  }, []);

  console.log(images.image);
  const galleryImage =
    images.map &&
    images.map(image => {
      return (
        <div key={image.id} className="gallery__image">
          <img src={image.image} alt="gallery" className="gallery__image-link" />
        </div>
      );
    });
  console.log(images);
  return <div className="gallery">{galleryImage}</div>;
}
