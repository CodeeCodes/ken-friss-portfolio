import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";
// const imagesURl = `http://localhost:5000/images`;
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

export default function Gallery() {
  const [images, setImages] = useState([
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
    pic19
  ]);

  // const getImages = () => {
  //   axios.get(imagesURl).then(res => setImages(res.data));
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  //map function if using backend functionality
  const galleryImage =
    images.map &&
    images.map((image, index) => {
      console.log(image === "/static/media/pic1.493aadc4.jpg");
      if (image === "/static/media/pic1.493aadc4.jpg") {
        return (
          <li className="carousel__slide current-slide" key={index}>
            <img src={image} alt="gallery" className="carousel__image" />
          </li>
        );
      } else {
        return (
          <li className="carousel__slide" key={index}>
            <img src={image} alt="gallery" className="carousel__image" />
          </li>
        );
      }
    });
  //carousel JS
  const refInput = useRef();
  const slider = () => {
    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const nextButton = document.querySelector(".carousel__button--right");
    const prevButton = document.querySelector(".carousel__button--left");
    const dotNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotNav.children);
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;

    const slideWidth = slides[0].getBoundingClientRect().width;

    //Arrange slide so that they are next to each other
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + "px";
    };
    slides.forEach(setSlidePosition);
  };
  useEffect(() => {
    slider();
  }, []);

  // move to slide
  const moveToSlide = (track, currentSlide, nextSlide) => {
    var currentSlide = track.querySelector(".current-slide");
    var nextSlide = currentSlide.nextElementSibling;
    console.log(nextSlide);
    track.style.transform = "translateX(-" + nextSlide.style.left + ")";
  };
  //when I click left, move slides to the left
  const moveLeft = () => {
    const track = document.querySelector(".carousel__track");
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    currentSlide.classList.remove("current-slide");
    prevSlide.classList.add("current-slide");
    //move to next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    track.style.height = "600px";
    moveToSlide(track, currentSlide, prevSlide);
    console.log(amountToMove);
  };
  //when I click right move slides to the right
  const moveRight = () => {
    const track = document.querySelector(".carousel__track");
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    currentSlide.classList.remove("current-slide");
    nextSlide.classList.add("current-slide");
    //move to next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    track.style.height = "600px";
    moveToSlide(track, currentSlide, nextSlide);
    console.log(amountToMove);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--left"
        onClick={moveLeft}
      >
        Prev
      </button>
      <div className="carousel__track-container">
        <ul className="carousel__track" ref={refInput}>
          {galleryImage}
        </ul>
      </div>
      <button
        className="carousel__button carousel__button--right"
        onClick={moveRight}
      >
        Next
      </button>
      <div className="carousel__nav">
        <button className="carousel__indicator"></button>
        <button className="carousel__indicator"></button>
        <button className="carousel__indicator"></button>
      </div>
    </div>
  );
}
