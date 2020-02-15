import React, { useState, useRef, useEffect } from "react";
import nextSvg from "../assets/svg/next.svg";
import prevSvg from "../assets/svg/back.svg";
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
import pic20 from "../assets/photos/pic20.jpg";
import pic21 from "../assets/photos/pic21.jpg";
import pic22 from "../assets/photos/pic22.jpg";
import pic23 from "../assets/photos/pic23.jpg";
import pic24 from "../assets/photos/pic24.jpg";
import pic25 from "../assets/photos/pic25.jpg";
import pic26 from "../assets/photos/pic26.jpg";
import pic27 from "../assets/photos/pic27.jpg";
import pic28 from "../assets/photos/pic28.jpg";
import pic29 from "../assets/photos/pic29.jpg";
import pic30 from "../assets/photos/pic30.jpg";
import pic31 from "../assets/photos/pic31.jpg";
import pic32 from "../assets/photos/pic32.jpg";
import pic33 from "../assets/photos/pic33.jpg";
import pic34 from "../assets/photos/pic34.jpg";
import pic35 from "../assets/photos/pic35.jpg";
import pic36 from "../assets/photos/pic36.jpg";
import pic37 from "../assets/photos/pic37.jpg";
import pic38 from "../assets/photos/pic38.jpg";
import pic39 from "../assets/photos/pic39.jpg";
import pic40 from "../assets/photos/pic40.jpg";
import pic41 from "../assets/photos/pic41.jpg";
import pic42 from "../assets/photos/pic42.jpg";
import pic43 from "../assets/photos/pic43.jpg";
import pic44 from "../assets/photos/pic44.jpg";
import pic45 from "../assets/photos/pic45.jpg";
import pic46 from "../assets/photos/pic46.jpg";
import pic47 from "../assets/photos/pic47.jpg";
import pic48 from "../assets/photos/pic48.jpg";
import pic49 from "../assets/photos/pic49.jpg";
import pic50 from "../assets/photos/pic50.jpg";
import pic51 from "../assets/photos/pic51.jpg";
import pic52 from "../assets/photos/pic52.jpg";
import pic53 from "../assets/photos/pic53.jpg";
import pic54 from "../assets/photos/pic54.jpg";
import pic55 from "../assets/photos/pic55.jpg";
import pic56 from "../assets/photos/pic56.jpg";
import pic57 from "../assets/photos/pic57.jpg";
import pic58 from "../assets/photos/pic58.jpg";
import pic59 from "../assets/photos/pic59.jpg";

export default function Carousel() {
  // const [isHidden, setIsHidden] = useState(true);
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
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29,
    pic30,
    pic31,
    pic32,
    pic33,
    pic34,
    pic35,
    pic36,
    pic37,
    pic38,
    pic39,
    pic40,
    pic41,
    pic42,
    pic43,
    pic44,
    pic45,
    pic46,
    pic47,
    pic48,
    pic49,
    pic50,
    pic51,
    pic52,
    pic53,
    pic54,
    pic55,
    pic56,
    pic57,
    pic58,
    pic59
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
    track.style.transform = "translateX(-" + nextSlide.style.left + ")";
  };
  //when I click left, move slides to the left
  const moveLeft = () => {
    const track = document.querySelector(".carousel__track");
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = prevSlide.style.left;
    currentSlide.classList.remove("current-slide");
    prevSlide.classList.add("current-slide");

    //move to next slide
    track.style.transform = "translateX(-" + amountToMove + ")";
    currentSlide.style.transition = "ease 2s";
    track.style.height = "600px";
    nextSlide.style.opacity = "0";
    prevSlide.style.opacity = "1";
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
    currentSlide.style.transition = "ease 1s";
    currentSlide.style.opacity = "0";
    nextSlide.style.opacity = "1";
    moveToSlide(track, currentSlide, nextSlide);
  };

  //when clicked on nav indicator, move to that slide
  const changeDots = e => {
    e.persist();
    //which indicator is clicked
    console.log(e);
    const targetDot = e.target.closest("button");
    if (!targetDot) return;

    const track = document.querySelector(".carousel__track");
    const slides = Array.from(track.children);
    const currentSlide = track.querySelector(".current-slide");
    const dotNav = document.querySelector(".carousel__nav");
    const dots = Array.from(dotNav.children);
    const currentDot = dotNav.querySelector(".current-slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    console.log(targetIndex);
    e.target.style.background = "black";
    e.target.style.opacity = "1";
    // changeDots(currentSlide, targetDot);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--left is-hidden"
        onClick={moveLeft}
      >
        <img src={prevSvg} alt="" />
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
        <img src={nextSvg} alt="" />
      </button>
      <div className="carousel__nav">
        <button className="carousel__indicator" onClick={changeDots}></button>
        <button className="carousel__indicator" onClick={changeDots}></button>
        <button className="carousel__indicator" onClick={changeDots}></button>
      </div>
    </div>
  );
}
