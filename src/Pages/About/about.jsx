import AboutHeader from "../../Images/about_header.jpg";
import AboutCustom from "../../Images/AboutCustom.png";
import "./about.css";
const About = () => {
  return (
    <>
      {/* About Header */}
      <div className="about">
        <div>
          <div className="img">
            <img src={AboutHeader} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
      </div>

      {/* About Main Custom Section */}
      <div className="about_custom container">
        <div className="content">
          <h6>
            <span>A</span>bout Us
          </h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi!</p>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <img src={AboutCustom} alt="" />
          </div>

          <div className="col-sm-7">
            <h6>
              <span>E</span>asy Coding Tutorial
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              dicta in adipisci cupiditate eaque quis labore totam, neque
              impedit nihil ipsum ad incidunt similique repellendus! Molestias
              maiores quod pariatur quo. <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
              beatae dignissimos iusto numquam optio illo fugit dicta deleniti
              non aliquid tempore quod, qui veritatis dolore. Provident,
              voluptatibus explicabo! Laboriosam similique voluptates possimus
              esse, minima cumque ducimus! Ad, dignissimos modi corrupti
              sapiente placeat, error vitae reiciendis maxime ea eum unde?
              Doloribus, quasi ex fuga odit ullam asperiores dolores
              reprehenderit a omnis! Repudiandae, doloremque minima enim commodi
              est magnam autem quas adipisci odio, ad hic nam repellendus
              explicabo odit perspiciatis, impedit non officiis voluptate illum
              quaerat laudantium voluptatibus corporis pariatur. Corrupti sint
              amet, eum maxime quibusdam aut ullam voluptas nostrum voluptatibus
              tempore. <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
              beatae saepe, cum asperiores vitae minus, unde labore, aliquid
              animi voluptatibus corporis nihil dolor molestiae neque nobis esse
              cupiditate non id. <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              incidunt aut nam minima! Commodi earum voluptates odio praesentium
              aspernatur nam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
