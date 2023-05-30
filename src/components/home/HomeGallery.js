import {images} from '../../contents'
import SwiperCore,{Pagination, EffectCoverflow  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-coverflow";
import '../../App.css';
SwiperCore.use([EffectCoverflow,Pagination]);
function HomeGallery() {
  return (
    <section id="home-gallery-sec">
    <div className="container">

      <h1 className="text-center">Gallery</h1>

      <div className="home-gallery-div">
      <Swiper className="swiper gallerySwiper"
      // install Swiper modules
      modules={[ Pagination,EffectCoverflow ]}
    
    
      effect={"coverflow"}
      centeredSlides={true}
      spaceBetween={0}
      slidesPerView={3}
      loop={true}
      pagination={{ clickable: true }}
      coverflowEffect={{
        rotate:50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows:true
      }}
     
    >
      <SwiperSlide className="swiper-slide"><img src={images.gallery1} /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.gallery2} /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.gallery3} /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.gallery4} /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.gallery5} /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.gallery6} /></SwiperSlide>
      <SwiperSlide className="swiper-slide"><img src={images.gallery7} /></SwiperSlide>
      
    </Swiper>
        {/* <div className="swiper gallerySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={images.gallery1} />
            </div>
            <div className="swiper-slide">
              <img src={images.gallery2} />
            </div>
            <div className="swiper-slide">
              <img src={images.gallery3} />
            </div>
            <div className="swiper-slide">
              <img src={images.gallery4} />
            </div>
            <div className="swiper-slide">
              <img src={images.gallery5} />
            </div>
            <div className="swiper-slide">
              <img src={images.gallery6} />
            </div>

          </div>
          <div className="swiper-pagination"></div>
        </div> */}

      </div>
    </div>
  </section>
  )
}

export default HomeGallery