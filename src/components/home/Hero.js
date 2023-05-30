import {images} from '../../contents';
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../App.css';


function Hero() {
  return (
    <section id="home-banner-sec">

    <div className="triangle">
      <svg width="363" height="657" viewBox="0 0 363 657" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.2038 417.531C-12.2041 376.904 -13.6894 294.668 40.2155 252.067L330.437 22.7031C397.948 -30.6507 497.352 16.3858 498.905 102.42L506.997 550.519C508.551 636.553 410.911 687.148 341.518 636.267L43.2038 417.531Z"
          fill="#E93233" fill-opacity="0.05" />
      </svg>
    </div>
    <div className="triangle">
      <svg width="363" height="657" viewBox="0 0 363 657" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M43.2038 417.531C-12.2041 376.904 -13.6894 294.668 40.2155 252.067L330.437 22.7031C397.948 -30.6507 497.352 16.3858 498.905 102.42L506.997 550.519C508.551 636.553 410.911 687.148 341.518 636.267L43.2038 417.531Z"
          fill="#E93233" fill-opacity="0.05" />
      </svg>
    </div>
    <div className="container">
      <div className="home-banner-div">

      <Swiper className="swiper bannerSwiper"
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      loop={true}
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className="swiper-slide"><img src={images.banner1} alt="img"/></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.banner2} alt="img"/></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.banner3} alt="img"/></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.banner4} alt="img"/></SwiperSlide>
      
    </Swiper>

        {/* <div className="swiper bannerSwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={images.banner1} alt="img"/>
            </div>
            <div className="swiper-slide">
              <img src={images.banner2} alt="img"/>
            </div>
            <div className="swiper-slide">
              <img src={images.banner3} alt="img"/>
            </div>
            <div className="swiper-slide">
              <img src={images.banner4} alt="img"/>
            </div>

          </div>
          <div className="swiper-button-next"></div>
      
          <div className="swiper-pagination"></div>
        </div> */}

        <div className="banner-content">
          <h1>Mukkam Mill Stores Private Limited.</h1>
          <p>We bring to you world class products with high quality, hassle-free performance…
          </p>
          <button href="#" className="btn btn-primary">Explore</button>

        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero