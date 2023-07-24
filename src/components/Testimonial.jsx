"use client"
import React from 'react'
import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { historyData, testimonials } from '@/data/SlideData'
import Line from './Line'
import { BsDash } from 'react-icons/bs';

const Testimonial = ({top, marginTD}) => {
  return (
    <>
          <div className={`flex flex-col lg:flex-row items-center justify-start testBG ${top?'padding__top':''} my-${marginTD?marginTD:0}`}>
            {/* Testimonials */}
            <div className="relative w-full lg:w-[50vw] h-96 py-8 px-10">
              <h2 className='font-bold text-2xl'>Testimonials</h2>
              <Line topPosition={'top-16'} leftPosition={'left-10'} />
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {
            testimonials.map((test) => (
              <SwiperSlide >
                      <div key={test.id} className="mt-4 group lg:max-w-[20vw] mx-auto flex items-start lg:justify-around">
                        <div className="text-3xl group-hover:text-orange-600 text-slate-800 duration-200 ease-in-out mx-2">
                          <BiSolidQuoteAltLeft />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <p className="text-slate-200 text-lg italic font-serif">{test.detail}</p>
                          <span className="font-bold text-white">{test.name}</span>
                          <span className='font-light text-sm text-white'>{test.position}</span>
                        </div>
                      </div>
              </SwiperSlide>
            ))
          }
    </Swiper>
          </div>
          {/* History */}
            <div className="relative w-full lg:w-[50vw] h-96 py-8 px-10">
              <h2 className='font-bold text-2xl'>Our History</h2>
              <Line topPosition={'top-16'} leftPosition={'left-10'} />
      <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {
            historyData.map((history) => (
              <SwiperSlide >
                      <div key={history.id} className="mt-4 group lg:max-w-[50vw] mx-auto flex items-start justify-around">
                        <div className="text-3xl group-hover:text-orange-600 text-slate-800 duration-200 ease-in-out mx-2">
                          <BsDash />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                          <span className="font-bold text-slate-200 text-lg text-left">{history.topic}</span>
                          <p className="text-slate-300 text-lg my-4">{history.detail}</p>
                          <span className='font-light text-sm text-slate-300 '>{history.subdetail}</span>
                        </div>
                      </div>
              </SwiperSlide>
            ))
          }
    </Swiper>
          </div>
      </div>
    </>
  )
}

export default Testimonial