import React from "react";
import pic1 from "../assets/photos/pic1.jpg";
import pic2 from "../assets/photos/pic2.jpg";
import pic3 from "../assets/photos/pic3.jpg";
import pic4 from "../assets/photos/pic4.jpg";
import pic5 from "../assets/photos/pic5.jpg";
import pic6 from "../assets/photos/pic6.jpg";
import pic7 from "../assets/photos/pic7.jpg";
import pic8 from "../assets/photos/pic8.jpg";
import pic9 from "../assets/photos/pic9.jpg";

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={pic1} alt="gallery" className="gallery__image" />
      <img src={pic2} alt="gallery" className="gallery__image" />
      <img src={pic3} alt="gallery" className="gallery__image" />
      <img src={pic4} alt="gallery" className="gallery__image" />
      <img src={pic5} alt="gallery" className="gallery__image" />
      <img src={pic6} alt="gallery" className="gallery__image" />
      <img src={pic7} alt="gallery" className="gallery__image" />
      <img src={pic8} alt="gallery" className="gallery__image" />
      <img src={pic9} alt="gallery" className="gallery__image" />
    </div>
  );
}
