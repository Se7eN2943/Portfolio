import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import Slide from './Slide/Slide'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import s from './Portfolio.module.scss'

const Portfolio: FC = () => {

  return (
    <div id='portfolio' className={s.portfolio}>
      <h5>Примеры моих работ</h5>
      <div className={s.portfolio_slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={100}
          onSlideChange={(e) => console.log(e)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><Slide /></SwiperSlide>
          <SwiperSlide><Slide /></SwiperSlide>
          <SwiperSlide><Slide /></SwiperSlide>
          <SwiperSlide><Slide /></SwiperSlide>
          <SwiperSlide><Slide /></SwiperSlide>
        </Swiper>
      </div>

    </div>

  )
}

export default Portfolio
