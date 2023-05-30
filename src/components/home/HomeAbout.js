import {images} from '../../contents'

function HomeAbout() {
    
  return (
 <>
    <section id="home-about-sec">
    <div class="container">
      <div class="home-about-div">
        <div class="img-div">
          <img src={images.homeAbout} alt="about-mumis"/>
          <div class="shape-anim">
            <svg height="572" viewBox="0 0 518 572" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M216 11.8261C242.608 -3.53636 275.392 -3.53636 302 11.8261L474.942 111.674C501.55 127.036 517.942 155.427 517.942 186.152V385.848C517.942 416.573 501.55 444.964 474.942 460.326L302 560.174C275.392 575.536 242.608 575.536 216 560.174L43.0584 460.326C16.4499 444.964 0.0584106 416.573 0.0584106 385.848V186.152C0.0584106 155.427 16.4499 127.036 43.0584 111.674L216 11.8261Z"
                fill="#2BA5C0" fill-opacity="0.12" />
            </svg>
          </div>
        </div>
        <div class="content-div">
          <h1 class="pb-4 pm-color">About Us</h1>
          <p>Mukkam Mills Stores (P) Ltd is a leading importing and trading company based in Mukkam Calicut, Kerala. The
            online platform of Mukkam Mill Stores, mumisonline.com caters to diverse industry verticals. We are dealing
            in building materials, Commercial & industrial equipment, boating and water sports needs etc.
          </p>
    
        </div>
      </div>
    </div>
  </section>
    <div className="flex-center-column">
    
    </div>
 </>
  )
}

export default HomeAbout