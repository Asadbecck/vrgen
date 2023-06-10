import videoBg from '../assets/main_5-2 (1).mp4'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Video = () =>
(
  <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
      <div className='sm:w-[94%] sm:ml-[41px] sm:h-[10%]'>
        <video src={videoBg} autoPlay loop muted  />
      </div>
    </SwiperSlide>
    <SwiperSlide>Slide 1</SwiperSlide>
  </Swiper>
)


export default Video;