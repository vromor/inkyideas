import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

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
              {/* Link tag use hobe ekhane juel h2 soriea but style same thakbe so classname dia dis */}
                <Link to="/gallery/photoshoots">
                <h2>Photo Shoots</h2>
                </Link>
            
                
            
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
                <Link to="/gallery/smalltownandruralmarketing">
                <h2>Small town and rural marketing</h2>
                </Link>
               
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
                
                <Link to="/gallery/vehicularactivations">
                <h2>Vehicular Activations</h2>
                </Link>
               
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
                
                <Link to="/gallery/outdooradvertising">
                <h2>Outdoor Advertising</h2>
                </Link>
               
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
                <Link to="/gallery/retailpromotionalservices">
                <h2>Retail promotional Services</h2>
                </Link>
               
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
                
                <Link to="/gallery/exhibition">
                <h2>Exhibition</h2>
                </Link>
               
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
                
                <Link to="/gallery/printproduction">
                <h2>Print Production</h2>
                </Link>
               
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
                
                <Link to="/gallery/events">
                <h2>Events</h2>
                </Link>
                
                
               
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
              <Link to="/gallery/animation">
                <h2>Animation</h2>
                </Link>
               
              </div>
            </center>
          </div>
        </div>
        
        </SwiperSlide>
      </Swiper>
    </>
  );
}
