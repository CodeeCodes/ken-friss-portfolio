import React from "react";
import uuid from "uuid/v4";
import pic1 from "../assets/photos/pic1.jpg";
import pic2 from "../assets/photos/pic2.jpg";
import pic3 from "../assets/photos/pic3.jpg";
import pic4 from "../assets/photos/pic4.jpg";
import pic5 from "../assets/photos/pic5.jpg";
import pic6 from "../assets/photos/pic6.jpg";
import pic7 from "../assets/photos/pic7.jpg";
import pic8 from "../assets/photos/pic8.jpg";
import pic9 from "../assets/photos/pic9.jpg";
import pic10 from "../assets/photos/pic10.jpg";
import pic11 from "../assets/photos/pic11.jpg";
import pic12 from "../assets/photos/pic12.jpg";
import pic13 from "../assets/photos/pic13.jpg";
import pic14 from "../assets/photos/pic14.jpg";
import pic15 from "../assets/photos/pic15.jpg";
import pic16 from "../assets/photos/pic16.jpg";
import pic17 from "../assets/photos/pic17.jpg";
import pic18 from "../assets/photos/pic18.jpg";
import pic19 from "../assets/photos/pic19.jpg";
import pic20 from "../assets/photos/pic20.jpg";
import pic21 from "../assets/photos/pic21.jpg";
import pic22 from "../assets/photos/pic22.jpg";
export default function Gallery() {
  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22
  ];
  console.log(uuid);
  const galleryImage = images.map(image => {
    return <img src={image} alt="gallery" className="gallery__image" />;
  });

  return <div className="gallery">{galleryImage}</div>;
}
