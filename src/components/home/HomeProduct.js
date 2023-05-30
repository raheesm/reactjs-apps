import { images } from "../../contents";
import TiltCard from "../TiltCard";

function HomeProduct() {
  return (
    <section id="home-pro-sec">
      <div className="triangle">
        <svg
          width="365"
          height="606"
          viewBox="0 0 365 606"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M55.5911 413.564C-16.7227 359.136 -17.3228 250.79 54.3835 195.564L270.497 29.121C360.302 -40.0437 490.461 23.5525 491.089 136.903L492.92 467.385C493.547 580.735 364.101 645.769 273.535 577.603L55.5911 413.564Z"
            fill="#FEF5F5"
          />
        </svg>
      </div>
      <div className="container">
        <div className="home-pro-div">
          <div className="top-text-box-title">
            <h1>
              Our Best <span className="line"> Selling</span>
              <span className="pm-color"> Products</span>
            </h1>
          </div>

          <div className="top-text-box-content">
            <p>
              We are dealing in building materials, Commercial & industrial
              equipment, boating and water sports needs etc. We import and
              export products by interacting with our international partners
            </p>
          </div>
          <TiltCard
            cardTitle="Outboard Motor"
            img={images.HomeProduct1}
            customClass="one"
          />
          <TiltCard
            cardTitle="Garden Items"
            img={images.HomeProduct2}
            customClass="two"
          />
          <TiltCard
            cardTitle="Kayak"
            img={images.HomeProduct3}
            customClass="three"
          />
          <div className="probox-info-one">
            <h3>Outboard motor</h3>
            <p>
              We offer only the highest quality materials, superior workmanship
              and world class heat treating{" "}
            </p>
          </div>
          <div className="probox-info-two">
            <h3>Garden items</h3>
            <p>
              Make your garden attractive with the right gardening tools and
              accessories!{" "}
            </p>
          </div>
          <div className="probox-info-three">
            <h3>Kayaks</h3>
            <p>
              The Kayaks and boats we supply are lightweight, streamlined as
              well as highly polished.
            </p>
          </div>

          <a href="#" className="btn btn-primary">
            All Products
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeProduct;
