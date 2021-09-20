import img1 from "../assests/MacBook-1.png";
import img2 from "../assests/Rectangle-221.png";
import img239 from "../assests/Rectangle239.png";
import img241 from "../assests/Rectangle241.png";
import img243 from "../assests/Rectangle243.png";
import iphone from "../assests/iPhone.png";
import "../css/navbar.css";

function Reactangle119() {
    return (
      <div>
          <img id="img-over-reactangle" src={img1} width="100%" height="779" />
          <div id="reactangle">
                <div id="img2-div">
                    <img id="rectangle-221" src={img2} width="100%" />
                    <div id="centered">BROWSE ALL MY OFFERINGS</div>
                    <img id="centered2" src={img239} />
                    <img id="centered3" src={img241} />
                    <img id="centered4" src={img243} />
                </div>
                <div id = "footer">
                    <div>
                        <a id="left-items" href="">Powered by  </a>                   
                        <img  alt = "iphone"src={iphone} />
                        <span id="right-items">Bread 2021 All rights reserved</span>
                    </div>
                    <div id="links-footer">
                      <a href="">Terms</a>
                      <a href="">Privacy</a>
                      <a href="">Abouts</a>
                    </div>
                </div>
          </div>
      </div>
    );
  }

  export default Reactangle119;