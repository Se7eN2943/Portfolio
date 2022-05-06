import { FC } from 'react'
import { Link } from 'react-router-dom'

import arrow from '../../../../../assets/img/arrow.png'

import s from './Slide.module.scss'
interface SlideProps {
  img: string
  text: string
  head: string
  link: string
}

const Slide = ({ img, text, head, link }: SlideProps) => {
  return (
    <div className={s.portfolio_slider__slide}>
      <div className={s.portfolio_slider__slide___img}>
        <img src={img} alt="" />
      </div>
      <div className={s.portfolio_slider__slide___text}>
        <h6>{head}</h6>
        <p>{text}</p>
        <div className={s.more}>
          <Link to={link}>
            <span>Перейти</span>
          </Link>
          <div className={s.arrow}>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
