import { FC } from 'react'

import Photo1 from '../../../../../assets/img/AboutMiPhoto1.jpg'
import Photo2 from '../../../../../assets/img/AboutMiPhoto2.jpg'
import Photo3 from '../../../../../assets/img/AboutMiPhoto3.jpg'

import s from './AboutMe.module.scss'

const AboutMe: FC = () => {

  return (
    <div className={s.main_aboutMi}>
      <div className={s.main_aboutMi__statrtImg}>
        <div className={s.main_aboutMi__img}>
          <img src={Photo1} alt="" />
        </div>
        <div className={s.main_aboutMi__img}>
          <img src={Photo2} alt="" />
        </div>
      </div>
      <div className={s.main_aboutMi__text}>
        <h4>Обо мне</h4>
        <p>Разнообразный и богатый опыт рамки и место обучения кадров обеспечивает широкому кругу специалистов системы массового участия.
          Не следует, однако, забывать, что начало повседневной работы по формированию позиции требует от нас анализа новых принципов
          формирования материально-технической и кадровой базы.
        </p>
      </div>
      <div className={s.main_aboutMi__endImg}>
        <div className={s.main_aboutMi__img}>
          <img src={Photo3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
