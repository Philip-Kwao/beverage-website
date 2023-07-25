"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SwiperItem from './SwiperItem';
import { swipeDetails } from '@/data/SlideData'

const CarouselSwiper = () => {
  return (
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          swipeDetails.map((swipe) => (
            <SwiperSlide key={swipe.id}>
                <SwiperItem 
                
                bgImg={swipe.bg} 
                btnTitle={swipe.btnTitle}
                image={swipe.image}
                title1 = {swipe.title_1}
                title2 = {swipe.title_2}
                subtitle = {swipe.subtitle} 
            />
            </SwiperSlide>
          ))
        }
  </Swiper>
  )
}

export default CarouselSwiper