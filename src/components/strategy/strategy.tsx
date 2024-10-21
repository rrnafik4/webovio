import "./index.scss";
import Genevieve from "./genevieve.png";

export const Strategy = () => {
  return (
    <div className="container-strategy _container">
      <div className="blok-strategy">
        <div className="text-strategy1"> What we do for you</div>
        <div className="text-strategy2">
          Strategy. Design Content. Technology Development
        </div>
        <div className="text-strategy3">
          There’s no secret sauce, no wizard behind the curtain. What makes
          Aerolab tick is an interdisciplinary team with a framework that
          fosters candid collaboration.
        </div>
        <div className="text-strategy4">More know About us</div>
      </div>
      <div className="describe-strategy">
        <div className="describe-strategy-container">
          <div className="describe">
            With More than 10 Years of Knowledge and Expertise we Design and
            Code Websites and Apps, We Build Brands and Help Them Succeed
          </div>
          <div className="png-container-strategy">
            <img src={Genevieve} alt="Genevieve" />
          </div>
        </div>
      </div>
    </div>
  );
};
