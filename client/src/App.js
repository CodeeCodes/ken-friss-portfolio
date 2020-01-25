import React from "react";
import "./styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header";
import About from "./components/about";
import Main from "./components/mainContent";
import Gallery from "./components/gallery2";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </div>
  );
}

export default App;
