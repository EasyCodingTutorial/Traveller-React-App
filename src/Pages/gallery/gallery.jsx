import ContactHeader from "../../Images/gallery_header.jpg";
import "./gallery.css";
import Img1 from "../../Images/1.jpg";
import Img2 from "../../Images/2.jpg";
import Img3 from "../../Images/3.jpg";
import Img4 from "../../Images/4.jpg";
import Img5 from "../../Images/5.jpg";
import Img6 from "../../Images/6.jpg";
const Gallery = () => {
  return (
    <>
      {/* Gallery Header */}
      <div className="contact gallery">
        <div>
          <div className="img">
            <img src={ContactHeader} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
      </div>

      {/* Gallery Start */}

      <div className="Customgallery container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
            </div>
          </div>

          {/* Second Row */}
          <div className="col-sm-4">
            <div className="box">
              <img src={Img4} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img5} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img6} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallery;
