import ContactHeader from "../../Images/contact_header.jpg";
import "./contact.css";
const Contact = () => {
  return (
    <>
      {/* Contact Header */}
      <div className="contact">
        <div>
          <div className="img">
            <img src={ContactHeader} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="ContactContent">
          {/*  */}
          <form action="">
            <h6>Contact us Now</h6>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Your Number"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                rows="6"
                className="form-control"
                placeholder="How We Can Help You"
                required
              ></textarea>
            </div>

            <button className="btn">Submit Now</button>
          </form>
          {/*  */}
        </div>
      </div>
    </>
  );
};
export default Contact;
