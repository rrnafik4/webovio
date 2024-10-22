import React from "react";
import "./index.scss";
import { Header } from "./header/header";
import Slider from "./header/jpg/Slider.jpg";
import { TitleNew } from "./title/title";
import { ContainerLogo } from "./containerLogo/containerLogo";
import { Strategy } from "./strategy/strategy";
import { Content } from "./containerLogo/content/content";
import { Footer } from "./footer/footer";

export interface PropsHeaderData {
  title: string;
  list1: string;
  list2: string;
  list3: string;
  list4: string;
  list5?: string;
}
const data: PropsHeaderData[] = [
  {
    title: "Services",
    list1: "Strategy Design",
    list2: "Product Design",
    list3: "Content Strategy",
    list4: "Brand Strategy",
    list5: "Development ",
  },
  {
    title: "Help And Advice",
    list1: "How it works",
    list2: "Contact Support",
    list3: "Privacy Policy",
    list4: "FAQ",
  },
  {
    title: "Company",
    list1: "About",
    list2: "Blog",
    list3: "Contact",
    list4: "Jobs",
  },
];

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

      <div className="container-test">
        <ContainerLogo />
      </div>
      <Strategy />
      <div className="create-line _container"></div>
      <Content />
      <div className="container-amazing-togetner mr-[20px]">
        <div className="amazing-togetner">
          <div className="text-amazing">
            Let’s make something amazing together.
          </div>
          <div className="text-started">LET'S GET STARTED</div>
        </div>
      </div>
      <Footer headerData={data} />
    </div>
  );
}

export default App;
