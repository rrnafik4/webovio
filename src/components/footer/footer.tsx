import "./index.scss";
import footer from "./footer.png";
import { PropsHeaderData } from "../App";
import Logo from "../header/jpg/image.png";
export const Footer: React.FC<{ headerData: PropsHeaderData[] }> = ({
  headerData,
}) => {
  return (
    <div className="container-png _ibg">
      <img src={footer} alt="footer" />
      <div className="container-content-footer _container">
        <div className="container-contact  mr-[20px] ml-[20px]">
          <div className="phon-address">
            <div className="text-[#ABB58E]">Phone</div>
            <div className="text-[#FCFCFC]">+32 50 31 28 32</div>
          </div>
          <div className="phon-address">
            <div className="text-[#ABB58E]">Address</div>
            <div className="text-[#FCFCFC]">491 Merlin Crest Sui</div>
          </div>
        </div>

        <div className="container-title-miscellaneous-information ">
          {headerData.map((el, index) => (
            <div key={index} className="container-services">
              <div className="title-miscellaneous-information">{el.title}</div>
              <div className="list">{el.list1}</div>
              <div className="list">{el.list2}</div>
              <div className="list">{el.list3}</div>
              <div className="list">{el.list4}</div>
              <div className="list">{el.list5}</div>
            </div>
          ))}
          <div className="container-mail">
            <div className="title-miscellaneous-information">Get in Touch</div>
            <div className="list">
              Feel free to get in touch with us vai email
            </div>
            <div className="mail">info.webovio@gmail.com</div>
          </div>
        </div>
        <div className="container-logo-rights mr-[20px] ml-[20px]">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="rights-reserved">
            © 2020@webovio. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};
