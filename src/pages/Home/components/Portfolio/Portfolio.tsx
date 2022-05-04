import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Slide from './Slide/Slide'

import 'swiper/css';

const Portfolio: FC = () => {

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Slide /></SwiperSlide>
      <SwiperSlide><Slide /></SwiperSlide>
      <SwiperSlide><Slide /></SwiperSlide>
      <SwiperSlide><Slide /></SwiperSlide>
      <SwiperSlide><Slide /></SwiperSlide>
    </Swiper>
  )
}

export default Portfolio
