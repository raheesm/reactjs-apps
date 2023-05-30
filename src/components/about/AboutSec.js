import {images} from '../../contents'

function AboutSec() {
  return (
    <section id="home-about-sec">
    <div className="container">
      <div className="home-about-div"> 
        <div className="img-div page-about-img">
          <img src={images.aboutImg} alt="about-mumis"/>     
        </div>
        <div className="content-div">
          <h1 className="pm-color">Who We Are..</h1>
          <div className="bar mb-4"></div>
          <p>Mukkam Mills Stores (P) Ltd is a leading importing and trading company based in Mukkam Calicut, Kerala. The online platform of Mukkam Mill Stores, mumisonline.com caters to diverse industry verticals. We are dealing in building materials, Commercial & industrial equipment, boating and water sports needs etc. 
          </p>
          <p>Established on humble beginnings the journey to success of Mukkam Mill Stores began in ……….. Within a short span of time, the company has become one of the leading certified suppliers of world class products. Our export-import operations started with building materials and grew to encompass commercial & industrial equipment, boats & Kayaks, gardening tools & accessories. 
          </p>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSec