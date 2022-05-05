import { FC } from 'react'

import s from './Slide.module.scss'
import img from '../img.png'
import arrow from '../../../../../assets/img/arrow.png'

const Slide: FC = (props) => {

  return (
    <div className={s.portfolio_slider__slide}>
      <div className={s.portfolio_slider__slide___img}>
        <img src={img} alt="" />
      </div>
      <div className={s.portfolio_slider__slide___text}>
        <h6>Название</h6>
        <p>Идейные соображения высшего порядка, а также понимание сущности ресурсосберегающих технологий создаёт предпосылки качественно новых шагов для системы обучения
          кадров, соответствующей насущным потребностям. Идейные соображения высшего порядка, а также сложившаяся структура организации требует анализа существующий
          финансовых и административных условий.
        </p>
        <div className={s.more}>
          <span>Перейти</span>
          <div className={s.arrow}>
            <img src={arrow} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Slide
