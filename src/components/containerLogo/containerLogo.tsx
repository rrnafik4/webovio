import "./container.scss";
import Logo1 from "./image1.png";
import Logo2 from "./image2.png";
import Logo3 from "./image3.png";
import Logo4 from "./image4.png";
import Logo5 from "./image5.png";
export const ContainerLogo = () => {
  return (
    <div className="container-log-header">
      <div className="log">
        <img src={Logo1} alt="log1" />
      </div>
      <div className="log">
        <img src={Logo2} alt="log1" />
      </div>
      <div className="log">
        <img src={Logo3} alt="log1" />
      </div>
      <div className="log">
        <img src={Logo4} alt="log1" />
      </div>
      <div className="log ml-[20px]">
        <img src={Logo5} alt="log1" />
      </div>
    </div>
  );
};
