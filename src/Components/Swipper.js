import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './swipper.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Swipper() {
  return (
    <>
    <h2 className='h2'>Our Protfolio</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        
        autoplay= {{
        delay: 5000,
        disableOnInteraction: false,
      }}

        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: -100,
         depth: 500,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="team-box team-box1">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box2">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box3">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box4">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box5">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box6">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box7">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box8">
          <div className="team-name">
            <center>
              <div className="team-content">
                <h2>Emma Johnson</h2>
                
               
              </div>
            </center>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="team-box team-box9">
          <div className="team-name">
            <center>
              <div className="team-content">
              <a href='#'> kdkfhs</a>
               
              </div>
            </center>
          </div>
        </div>
        
        </SwiperSlide>
      </Swiper>
    </>
  );
}
