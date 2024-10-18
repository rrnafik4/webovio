import React from "react";
import "./index.scss";
import { Header } from "./header/header";
import Slider from "./header/jpg/Slider.jpg";
import { TitleNew } from "./title/title";

function App() {
  return (
    <div className="wrapper">
      <div className="container-png _ibg">
        <img src={Slider} alt="Slider" />
        <div className="_container">
          <Header />
          <TitleNew />
        </div>
      </div>
    </div>
  );
}

export default App;
