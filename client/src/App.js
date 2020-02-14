import React from "react";
import "./styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Main from "./components/mainContent";
import Gallery from "./components/gallery2";
import Reels from "./components/reels";
import Footer from "./components/footer";

function App() {
  //navSlide
  const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".header");
    // const navLinks = document.querySelectorAll(".header div");
    //Toggle Nav
    nav.classList.toggle("burger-active");
    //toggle burger
    burger.classList.toggle("toggle");
  };
  return (
    <div className="App">
      <Header />
      <div className="burger" onClick={navSlide}>
        <div className="lineOne"></div>
        <div className="lineTwo"></div>
        <div className="lineThree"></div>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/reels" component={Reels} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
