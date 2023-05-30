import React from 'react'

function HeroBottomSec() {
  return (
    <section id="home-service-sec">
    <div className="container">
      <div className="home-service-div">

        <div className="home-service-box">
          <div className="box">
            <p>Construction
              Materials</p>
          </div>
          <div className="box">
            <p>Boats & Kayaks</p>
          </div>
          <div className="box">
            <p>Cleaning
              Materials</p>
          </div>
          <div className="box">
            <p>Graden
              Items</p>
          </div>
        </div>

        <div className="home-service-box-side">
          <h4 onclick="location.href='products.html'">View all</h4>
          <svg onclick="location.href='products.html'" width="25" height="25" fill="currentColor"
            className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path
              d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroBottomSec