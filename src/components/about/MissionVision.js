import {images} from "../../contents";

function MissionVision() {
  return (
    <section id="mi-vi-sec">
      <div className="container">
        <div className="mi-vi-div">
          <div className="mission-div">
            <div className="content-div">
              <h1>Mission</h1>
              <div className="bar"></div>
              <p>
                We are committed to meet the increasing and diversified demands
                of the customers by providing quality products & reliable
                services as well as sourcing from reputed manufacturers.
              </p>
            </div>
            <div className="img-div">
              <img src={images.mission} alt="mission" />
            </div>
          </div>

          <div className="vision-div">
            <div className="img-div">
              <img src={images.vision} alt="vision" />
            </div>
            <div className="content-div">
              <h1>Vision</h1>
              <div className="bar"></div>
              <p>
                To become the market leader in different product segments & the
                professional marketing partner for our principals meeting their
                objectives of sales, market information, and customer service.
              </p>
              <p>
                To be the preferred supplier of our customers, with our products
                exceeding their quality requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
