import "./home.css";
import HeaderImg from "../../Images/header.jpg";
import custom1 from "../../Images/custom1.jpg";
import Img2 from "../../Images/2.jpg";
import Img3 from "../../Images/3.jpg";
import Img4 from "../../Images/4.jpg";
import Img5 from "../../Images/5.jpg";
import Img6 from "../../Images/6.jpg";
const Header = () => {
  return (
    <>
      {/* Header Start */}
      <div className="header">
        <div>
          <div className="img">
            <img src={HeaderImg} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>What are You Waiting For ?</h6>
          <button className="btn">Read More</button>
        </div>
      </div>

      {/* Custom Section Start */}
      <div className="custom container">
        <div className="row">
          <div className="col-sm-4">
            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque recusandae nihil reiciendis, nam minima impedit.
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque recusandae nihil reiciendis, nam minima impedit.
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque recusandae nihil reiciendis, nam minima impedit.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img src={custom1} className="img-fluid" alt="" />
          </div>
          <div className="col-sm-4">
            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque recusandae nihil reiciendis, nam minima impedit.
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque recusandae nihil reiciendis, nam minima impedit.
              </p>
            </div>

            <div>
              <h6>Be Happy Start Travelling</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque recusandae nihil reiciendis, nam minima impedit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
